package models

import (
	"insight/config"
)

var db = config.DB

func init() {
	db.AutoMigrate(&User{})
}
