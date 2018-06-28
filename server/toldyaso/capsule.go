package toldyaso

import (
	"time"
	"math/rand"
)

type Capsule struct {
	TimeCreated time.Time `json:"timeCreated,omitempty"`
	TimeExpired time.Time `json:"timeExpired,omitempty"`
	TimeEdited  time.Time `json:"timeEdited,omitempty"`
	IsExpired   bool      `json:"isExpired,omitempty"`
	IsPublic    bool      `json:"isPublic,omitempty"`
	Title       string    `json:"title,omitempty"`
	Message     string    `json:"message,omitempty"`
	Author      ePair     `json:"author,omitempty"`
	Recipients  []ePair   `json:"recipients,omitempty"`
	Id          UUID      `json:"uuid,omitempty"`
	PassKey     string    `json:"passkey,omitempty"`
	Votes       Votes     `json:"votes,omitempty"`
}

type ePair struct {
	// maybe username later?
	Name  string `json:"name,omitempty"`
	Email Email  `json:"email,omitempty"`
}
type UUID int
type Email string
type Votes struct {
	Up   uint `json:"up,omitempty"`
	Down uint `json:"down,omitempty"`
}

func generateUUID() UUID {
	// TODO: replace with real UUID later
	return UUID(rand.Intn(10000000))
}
