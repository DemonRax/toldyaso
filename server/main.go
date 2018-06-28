package main

import (
	"net/http"
	"log"

	"github.com/DemonRax/toldyaso/server/toldyaso"
)

func main() {
	err := http.ListenAndServe(":4701", toldyaso.Handler())
	if err != nil {
		log.Fatal(err)
	}
}
