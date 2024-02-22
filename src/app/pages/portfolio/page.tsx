"use client"

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, 
} from "@/components/ui/card"


function page() {
  
  return (
    <>
      
    <main className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 ">
        <Card>
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 2</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 3</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 4</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p> Content</p>
          </CardContent>
          <CardFooter>
            <p> Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle> Project 5</CardTitle>
            <CardDescription> Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p> Content</p>
          </CardContent>
          <CardFooter>
            <p> Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle> Project 6</CardTitle>
            <CardDescription> Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p> Content</p>
          </CardContent>
          <CardFooter>
            <p> Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle> Project 7</CardTitle>
            <CardDescription> Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p> Content</p>
          </CardContent>
          <CardFooter>
            <p> Footer</p>
          </CardFooter>
        </Card>

    </main>
    </>
  )
}

export default page