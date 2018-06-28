package toldyaso

import "encoding/json"

func listAll() (int, string) {
	j, _ := json.Marshal(database)
	return 200, string(j)
}
