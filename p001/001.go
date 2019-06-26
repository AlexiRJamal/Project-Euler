package main

import "fmt"

func main() {
	var arr [1000]int
	sum := 0

	for i := 0; i < 1000; i++ {
		arr[i] = i
	}

	for j := 0; j < len(arr); j++ {
		if arr[j]%3 == 0 || arr[j]%5 == 0 {
			sum += arr[j]
		}
	}

	fmt.Println(sum)
}
