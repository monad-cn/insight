import { Card, Row, Col, Statistic, Table, Tag, Avatar, Space, Typography } from "antd"
import { Line, Pie, Column } from "@ant-design/plots"
import { Users, Code, Trophy, Calendar, GitFork, TrendingUp, PieChart, Layers } from "lucide-react"
import styles from "./index.module.css"

const { Title, Text, Paragraph } = Typography

export default function Home() {
  // 社区统计数据
  const communityStats = [
    { title: "活跃开发者", value: 1247, icon: <Users className={styles.statIcon} />, prefix: "", suffix: "+" },
    { title: "链上项目", value: 356, icon: <Code className={styles.statIcon} />, prefix: "", suffix: "+" },
    { title: "黑客松活动", value: 24, icon: <Trophy className={styles.statIcon} />, prefix: "", suffix: "" },
    { title: "社区活动", value: 48, icon: <Calendar className={styles.statIcon} />, prefix: "", suffix: "+" },
  ]

  // 开发者活跃度趋势数据
  const activityData = [
    { month: "2024-07", developers: 856, projects: 234 },
    { month: "2024-08", developers: 923, projects: 267 },
    { month: "2024-09", developers: 1001, projects: 289 },
    { month: "2024-10", developers: 1089, projects: 312 },
    { month: "2024-11", developers: 1156, projects: 334 },
    { month: "2024-12", developers: 1247, projects: 356 },
  ]

  const activityChartData = [
    ...activityData.map((d) => ({ month: d.month, value: d.developers, category: "开发者" })),
    ...activityData.map((d) => ({ month: d.month, value: d.projects, category: "项目" })),
  ]

  const activityConfig = {
    data: activityChartData,
    xField: "month",
    yField: "value",
    seriesField: "category",
    color: ["#7c3aed", "#a78bfa"],
    smooth: true,
    legend: {
      position: "top" as const,
    },
  }

  // 项目分类分布
  const projectCategoryData = [
    { type: "DeFi", value: 128 },
    { type: "NFT", value: 89 },
    { type: "GameFi", value: 67 },
    { type: "DAO", value: 45 },
    { type: "基础设施", value: 27 },
  ]

  const pieConfig = {
    data: projectCategoryData,
    angleField: "value",
    colorField: "type",
    color: ["#7c3aed", "#a78bfa", "#c4b5fd", "#ddd6fe", "#ede9fe"],
    radius: 0.9,
    innerRadius: 0.6,
    legend: {
      position: "bottom" as const,
    },
  }

  // 技术栈使用分布
  const techStackData = [
    { tech: "Solidity", count: 234, percentage: 65.7 },
    { tech: "Rust", count: 156, percentage: 43.8 },
    { tech: "TypeScript", count: 298, percentage: 83.7 },
    { tech: "React", count: 267, percentage: 75.0 },
    { tech: "Node.js", count: 223, percentage: 62.6 },
  ]

  const columnConfig = {
    data: techStackData,
    xField: "tech",
    yField: "count",
    color: "#7c3aed",
  }

  // 开发者列表数据
  const developersData = [
    {
      key: "1",
      name: "Alex Chen",
      avatar: "/developer-avatar.png",
      bio: "DeFi 协议架构师，专注于 AMM 和流动性挖矿",
      projects: 12,
      contributions: 234,
      hackathons: 5,
      skills: ["Solidity", "Rust", "DeFi"],
      badges: ["🏆 黑客松冠军", "⭐ 核心贡献者"],
    },
    {
      key: "2",
      name: "Sarah Johnson",
      avatar: "/female-developer.png",
      bio: "NFT 市场开发者，创建多个热门 NFT 项目",
      projects: 8,
      contributions: 189,
      hackathons: 3,
      skills: ["TypeScript", "React", "NFT"],
      badges: ["🎨 创意奖", "💎 早期建设者"],
    },
    {
      key: "3",
      name: "Michael Zhang",
      avatar: "/asian-developer.jpg",
      bio: "GameFi 开发专家，链游经济模型设计师",
      projects: 6,
      contributions: 156,
      hackathons: 4,
      skills: ["Solidity", "Unity", "GameFi"],
      badges: ["🎮 游戏创新奖", "🚀 快速构建者"],
    },
    {
      key: "4",
      name: "Emma Wilson",
      avatar: "/developer-portrait.png",
      bio: "DAO 治理框架开发者，社区工具建设者",
      projects: 9,
      contributions: 201,
      hackathons: 2,
      skills: ["TypeScript", "Web3.js", "DAO"],
      badges: ["🏛️ 治理专家", "🤝 社区领袖"],
    },
    {
      key: "5",
      name: "David Kim",
      avatar: "/male-programmer.jpg",
      bio: "基础设施开发者，专注于性能优化和工具链",
      projects: 15,
      contributions: 312,
      hackathons: 6,
      skills: ["Rust", "Go", "DevOps"],
      badges: ["⚡ 性能优化奖", "🔧 工具大师"],
    },
    {
      key: "6",
      name: "Lisa Martinez",
      avatar: "/female-coder.jpg",
      bio: "全栈开发者，DApp 用户体验设计专家",
      projects: 11,
      contributions: 267,
      hackathons: 4,
      skills: ["React", "Node.js", "UX/UI"],
      badges: ["🎨 最佳设计", "✨ 用户体验奖"],
    },
  ]

  const columns = [
    {
      title: "开发者",
      dataIndex: "name",
      key: "name",
      width: 350,
      render: (_: any, record: any) => (
        <Space size={12}>
          <Avatar src={record.avatar} size={56} />
          <div>
            <div className={styles.developerName}>{record.name}</div>
            <Text type="secondary" className={styles.developerBio}>
              {record.bio}
            </Text>
          </div>
        </Space>
      ),
    },
    {
      title: "项目",
      dataIndex: "projects",
      key: "projects",
      align: "center" as const,
      render: (projects: number) => (
        <Statistic
          value={projects}
          styles={{ value: { fontSize: 18, color: "#7c3aed", fontWeight: 600 } }}
          prefix={<Code size={16} color="#7c3aed" />}
        />
      ),
    },
    {
      title: "贡献",
      dataIndex: "contributions",
      key: "contributions",
      align: "center" as const,
      render: (contributions: number) => (
        <Statistic
          value={contributions}
          styles={{ value: { fontSize: 18, color: "#059669", fontWeight: 600 } }}
          prefix={<GitFork size={16} color="#059669" />}
        />
      ),
    },
    {
      title: "技能标签",
      dataIndex: "skills",
      key: "skills",
      render: (skills: string[]) => (
        <Space wrap>
          {skills.map((skill) => (
            <Tag key={skill} color="purple" className={styles.skillTag}>
              {skill}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: "成就",
      dataIndex: "badges",
      key: "badges",
      render: (badges: string[]) => (
        <Space orientation="vertical" size={4}>
          {badges.map((badge, index) => (
            <Tag key={index} className={styles.badge}>
              {badge}
            </Tag>
          ))}
        </Space>
      ),
    },
  ]

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Title level={1} className={styles.title}>
            Monad 开发者社区看板
          </Title>
          <Paragraph className={styles.subtitle}>探索 Monad 生态系统中活跃的开发者和创新项目</Paragraph>
        </div>
      </header>

      {/* 社区统计 */}
      <div className={styles.statsSection}>
        <Row gutter={[24, 24]}>
          {communityStats.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className={styles.statCard} variant="filled">
                <div className={styles.statIconWrapper}>{stat.icon}</div>
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  styles={{ value: { color: "#7c3aed", fontWeight: 600 } }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* 图表区域 */}
      <div className={styles.chartsSection}>
        <Title level={2} className={styles.sectionTitle}>
          <TrendingUp className={styles.titleIcon} />
          数据概览
        </Title>
        <Row gutter={[24, 24]}>
          {/* 开发者活跃度趋势 */}
          <Col xs={24} xl={16}>
            <Card
              title={
                <Space>
                  <TrendingUp size={18} color="#7c3aed" />
                  <span>开发者活跃度趋势</span>
                </Space>
              }
              className={styles.chartCard}
              variant="borderless"
            >
              <Line {...activityConfig} height={320} />
            </Card>
          </Col>

          {/* 项目分类分布 */}
          <Col xs={24} xl={8}>
            <Card
              title={
                <Space>
                  <PieChart size={18} color="#7c3aed" />
                  <span>项目分类分布</span>
                </Space>
              }
              className={styles.chartCard}
              variant="borderless"
            >
              <Pie {...pieConfig} height={320} />
            </Card>
          </Col>

          {/* 技术栈使用分布 */}
          <Col xs={24}>
            <Card
              title={
                <Space>
                  <Layers size={18} color="#7c3aed" />
                  <span>技术栈使用分布</span>
                </Space>
              }
              className={styles.chartCard}
              variant="borderless"
            >
              <Column {...columnConfig} height={280} />
            </Card>
          </Col>
        </Row>
      </div>

      {/* 开发者列表 */}
      <div className={styles.developersSection}>
        <Title level={2} className={styles.sectionTitle}>
          <Users className={styles.titleIcon} />
          活跃开发者
        </Title>
        <Card className={styles.tableCard}>
          <Table
            columns={columns}
            dataSource={developersData}
            pagination={{ pageSize: 10, showSizeChanger: true }}
            scroll={{ x: "max-content" }}
          />
        </Card>
      </div>
    </div>
  )
}
