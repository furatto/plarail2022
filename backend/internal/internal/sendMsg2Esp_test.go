package internal

import (
	"reflect"
	"testing"
	"ueckoken/plarail2021-soft-internal/pkg/station2espIp"
)

func TestNewSend2Node(t *testing.T) {
	type args struct {
		sta   *station2espIp.StationDetail
		state string
		e     *Env
	}
	tests := []struct {
		name string
		args args
		want *Send2node
	}{
		{
			name: "",
			args: args{
				sta: &station2espIp.StationDetail{
					Pin: 0,
				},
				state: "ON",
				e:     nil,
			},
			want: &Send2node{
				Station:     &station2espIp.StationDetail{Pin: 0},
				Environment: nil,
				sendData: &sendData{
					State: "ON",
					Pin:   0,
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := NewSend2Node(tt.args.sta, tt.args.state, tt.args.e); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("NewSend2Node() = %v, want %v", got, tt.want)
			}
		})
	}
}
