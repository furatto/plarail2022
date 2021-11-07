package internal

import (
	"encoding/json"
	"ueckoken/plarail2021-soft-internal/pkg"
	"ueckoken/plarail2021-soft-internal/pkg/station2espIp"
)

type sendData struct {
	State string `json:"state"`
	Pin   int    `json:"pin"`
}
type Send2node struct {
	Station     *station2espIp.StationDetail
	Environment *Env
	sendData    *sendData
}

func NewSend2Node(sta *station2espIp.StationDetail, state string, e *Env) *Send2node {
	return &Send2node{
		Station:     sta,
		Environment: e,
		sendData: &sendData{
			State: state,
			Pin:   sta.Pin,
		},
	}
}
func (s *Send2node) Send2Esp() error {
	b, err := json.Marshal(s.sendData)
	if err != nil {
		return err
	}

	err = pkg.SendJson(s.Station.Address, b, s.Environment.NodeConnection.Timeout)
	if err != nil {
		return err
	}

	return nil
}
