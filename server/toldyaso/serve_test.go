package toldyaso

import (
	"testing"
	)

func TestShiftURI(t *testing.T) {
	for _, test := range []struct {
		uri, first, rest string
	}{
		{},
		{uri: "single", first: "single"},
		{uri: "one/two", first: "one", rest: "two"},
		{uri: "one/two/three", first: "one", rest: "two/three"},
	} {
		t.Run(test.uri, func(t *testing.T) {
			if first, rest := shiftURI(test.uri); first != test.first || rest != test.rest {
				t.Errorf("for URI: %q\nexpected to get first: %q and rest: %q,\nbut instead got first: %q and rest: %q", test.uri, test.first, test.rest, first, rest)
			}
		})
	}
}
