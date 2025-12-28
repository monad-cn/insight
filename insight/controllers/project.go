package controllers

import (
	"insight/models"
	"insight/utils"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/lib/pq"
)

// CreateProject 创建项目
func CreateProject(c *gin.Context) {
	var req CreateProjectRequest

	// 绑定并验证请求参数
	if err := c.ShouldBindJSON(&req); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid request parameters", err.Error())
		return
	}

	project := models.Project{
		Name:        req.Name,
		Description: req.Description,
		Github:      req.Github,
		Site:        req.Site,
		CoverImg:    req.CoverImg,
		Tags:        pq.StringArray(req.Tags),
	}

	// 保存到数据库
	if err := models.CreateProject(&project); err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Failed to create project", err.Error())
		return
	}

	utils.SuccessResponse(c, http.StatusCreated, "Project created successfully", project)
}

// GetProject 根据ID获取项目
func GetProject(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid ID", nil)
		return
	}

	project, err := models.GetProjectByID(uint(id))
	if err != nil {
		utils.ErrorResponse(c, http.StatusNotFound, "Project not found", nil)
		return
	}

	utils.SuccessResponse(c, http.StatusOK, "Success", project)
}

// GetProjects 查询项目列表
func QueryProjects(c *gin.Context) {
	// 获取查询参数
	pageStr := c.DefaultQuery("page", "1")
	pageSizeStr := c.DefaultQuery("page_size", "10")
	keyword := c.Query("keyword")
	tag := c.Query("tag")

	// 转换分页参数
	page, err := strconv.Atoi(pageStr)
	if err != nil || page < 1 {
		page = 1
	}

	pageSize, err := strconv.Atoi(pageSizeStr)
	if err != nil || pageSize <= 0 {
		pageSize = 10
	}

	// 构建过滤器
	filter := models.ProjectFilter{
		Page:     page,
		PageSize: pageSize,
		Keyword:  keyword,
		Tag:      tag,
	}

	// 查询项目列表
	projects, total, err := models.QueryProjects(filter)
	if err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Failed to fetch projects", err.Error())
		return
	}

	var response ProjectListResponse
	response.Projects = projects
	response.Total = total
	response.Page = page
	response.PageSize = pageSize

	utils.SuccessResponse(c, http.StatusOK, "Success", response)
}
