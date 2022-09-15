package model

import "time"

type (
	Post struct {
		Id        string    `json:"id"`
		user      User      `json:"user"`
		imagePath string    `json:"image_path"`
		timestamp time.Time `json:"timestamp"`
		likeCount int       `json:"like_count"`
	}
)
