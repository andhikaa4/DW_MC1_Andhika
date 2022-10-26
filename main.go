package main

import (
	"fmt"
)

func main() {
	profile := MakeProfile("Goku")
	fmt.Println("Name : ", profile.Name)
	fmt.Println("Health : ", profile.Health)
	fmt.Println("Power : ", profile.Power)
	fmt.Println("Exp : ", profile.Exp)
	fmt.Println("<===== POWER UP CHARACTER ======>")
	power := PowerUp(profile, 2)
	fmt.Println("Name : ", power.Name)
	fmt.Println("Health : ", power.Health)
	fmt.Println("Power : ", power.Power)
	fmt.Println("Exp : ", power.Exp)

}

func MakeProfile(Name string) Profile {
	var profile Profile
	profile.Name = Name

	if profile.Name == "Goku" {
		profile.Health = 400
		profile.Power = 300
		profile.Exp = 100
	}

	if profile.Name == "Sasuke" {
		profile.Health = 200
		profile.Power = 100
		profile.Exp = 0
	}

	if profile.Name == "Naruto" {
		profile.Health = 150
		profile.Power = 100
		profile.Exp = 50
	}

	return profile
}

func PowerUp(a Profile, b int) Profile {
	var PowerUp Profile
	PowerUp.Name = a.Name
	PowerUp.Health = a.Health * b
	PowerUp.Power = a.Power * b
	PowerUp.Exp = a.Exp * b

	return PowerUp
}

type Profile struct {
	Name   string
	Health int
	Power  int
	Exp    int
}
