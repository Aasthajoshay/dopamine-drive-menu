import { Card } from '@mui/material'
import React from 'react'
import './FeaturedPosts.css'; 
import { CardContent, CardTitle, CardDescription } from '@mui/material';

function FeaturedPosts() {
  return (
    <Card>
      <CardContent>
        <CardTitle>Featured Post Title</CardTitle>
        <CardDescription>
          This is a description of the featured post.
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default FeaturedPosts