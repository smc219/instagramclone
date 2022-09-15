package model

type (
	User struct {
		Id           string `json:"id"`
		Username     string `json:"username"`
		Email        string `json:"email"`
		profileImage string `json:"profileImage"`
	}
)
