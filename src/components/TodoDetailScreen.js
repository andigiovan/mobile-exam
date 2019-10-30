import React from 'react'
import { Text } from 'react-native'
import { View, Container, Content, Card, CardItem, H1, Button, Body, Item } from 'native-base'
import firebase from "firebase"

const TodoDetailScreen = props => {

   const {navigation} = props

   onDeletePress= (id) => {
       firebase.database().ref(`/${id}`).remove()
       .then(() => {
           props.navigation.goBack()
       })
   }

    return (
        <Container>
            {/* <Content> */}
                <Card style={{ marginTop: '50%' }}>
                    <CardItem header>
                        <Body>
                            <H1>
                                Todo: {JSON.stringify(navigation.getParam('todo'))}
                            </H1>
                            <Text>
                                ID: {JSON.stringify(navigation.getParam('id'))} 
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Status:{JSON.stringify(navigation.getParam('status'))}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Created: {JSON.stringify(navigation.getParam('dateCreated'))}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Completed:{JSON.stringify(navigation.getParam('dateCompleted'))}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Button info
                        onPress={()=> props.navigation.goBack()}
                        >
                            <Text>Go Back</Text>
                        </Button>

                        <Button danger onPress={() => onDeletePress(navigation.getParam('id'))} style={{marginLeft: 10}}>
                            <Text>Delete</Text>
                        </Button>
                    </CardItem>
                </Card>
            {/* </Content> */}
        </Container>
    )
}

export default TodoDetailScreen