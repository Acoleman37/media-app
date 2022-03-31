import React from 'react'
import { Grid, Image } from 'semantic-ui-react';
import {useQuery} from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';



const GridCelled = () => {

  const {loading, data} = useQuery(GET_ME);
  const userData  = data?.me || {};

  console.log(userData);

return (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
}

export default GridCelled
