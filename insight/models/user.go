package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email    string `gorm:"unique;not null" json:"email"`
	Username string `json:"username"`
	Avatar   string `json:"avatar"`
	Github   string `json:"github"`
	Twitter  string `json:"twitter"`
	Uid      uint   `json:"-"` // OAUTH
}

func GetUserByUid(uid uint) (*User, error) {
	var u User
	if err := db.Where("uid = ?", uid).First(&u).Error; err != nil {
		return nil, err
	}
	return &u, nil
}

func GetUserById(id uint) (*User, error) {
	var u User
	if err := db.Where("id = ?", id).First(&u).Error; err != nil {
		return nil, err
	}
	return &u, nil
}

func CreateUser(u *User) error {
	return db.Create(u).Error
}

func UpdateUser(u *User) error {
	if err := db.Save(u).Error; err != nil {
		return err
	}
	return nil
}

func GetUserByEmail(u *User) error {
	if err := db.Where("email = ?", u.Email).First(u).Error; err != nil {
		return err
	}
	return nil
}
