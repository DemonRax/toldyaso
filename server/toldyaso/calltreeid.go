package toldyaso

import (
	"context"
	"net/http"
)

type contextKey string

const requestKey = "CallTreeID"
const callTreeID contextKey = requestKey

func createRequestContext(r *http.Request) context.Context {
	cti := r.Header.Get(requestKey)
	if cti == "" {
		cti = RandString(30)
	}
	return inNewContext(r.Context(), cti)
}

func inNewContext(ctx context.Context, cti string) context.Context {
	return context.WithValue(ctx, callTreeID, cti)
}

func fromContext(ctx context.Context) string {
	cti, _ := ctx.Value(callTreeID).(string)
	return cti
}
