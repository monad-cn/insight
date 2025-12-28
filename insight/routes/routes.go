package routes

import (
	"insight/controllers"
	"insight/middlewares"

	"github.com/gin-gonic/gin"
)

func SetupRouter(r *gin.Engine) {
	r.Use(middlewares.Cors())

	// r.POST("/v1/login", controllers.HandleLogin)

	user := r.Group("/v1/users")
	{
		user.POST("", controllers.CreateUser)
		user.GET("", controllers.QueryUsers)
		user.GET("/:id", controllers.GetUser)
	}

	project := r.Group("/v1/projects")
	{
		project.POST("", controllers.CreateProject)
		project.GET("", controllers.QueryProjects)
		project.GET("/:id", controllers.GetProject)
	}

}
