package toldyaso

import (
	"net/http"
	"fmt"
	"context"
	"strings"
	"time"
)

var database = map[UUID]Capsule{}

func init() {
	database = make(map[UUID]Capsule)
	for i := 1; i <= 5; i++ {
		uuid := generateUUID()
		database[uuid] = Capsule{
			Id:      uuid,
			Title:   fmt.Sprintf("Title! %v", i),
			Message: fmt.Sprintf("Message! %v", i),
			Author:  ePair{Name: "Jay", Email: "no@no.no"},
			TimeCreated: time.Now(),
		}
	}
}

func Handler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := createRequestContext(r)
		var response string
		var status int
		switch r.Method {
		case http.MethodGet:
			status, response = handleGet(ctx, r.RequestURI)
		case http.MethodPost:
			status = http.StatusMethodNotAllowed
			response = fmt.Sprintf("%s: %s", methodNotAllowed, r.Method)
		default:
			status = http.StatusNotImplemented
			response = fmt.Sprintf("%s: %s", methodNotImplemented, r.Method)
		}
		w.WriteHeader(status)
		w.Write([]byte(response))
	}
}

func handleGet(ctx context.Context, uri string) (int, string) {
	uri = strings.Trim(uri, uriSeparator)
	first, rest := shiftURI(uri)
	_ = rest
	switch first {
	case "":
		return listAll()
	default:
		return http.StatusBadRequest, "TODO"
	}
}

func shiftURI(uri string) (string, string) {
	splitIndex := strings.Index(uri, uriSeparator)
	if splitIndex == -1 {
		return uri, ""
	}
	return uri[:splitIndex], uri[splitIndex+1:]
}

const (
	uriSeparator = "/"
)

const (
	methodNotAllowed     = "method not allowed"
	methodNotImplemented = "method not implemented"
)
