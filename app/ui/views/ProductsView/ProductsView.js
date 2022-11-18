import React from "react";
import { ScrollView } from "react-native";
import { Appbar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const ViewContainer = styled.SafeAreaView`

    flex: 1;
  
`;

const Produccard = styled(Card)`

    margin: 7px;

`;

export default function ProductView(props){

    return(

        <ViewContainer>
            <Appbar.Header>
                <Appbar.Content title={'G&M Viagens'}/>
            </Appbar.Header>
            <ScrollView>
                <Produccard>
                <Card>
                    <Card.Cover 
                    source={{uri:'https://th.bing.com/th/id/OIP.vdcAZyA6SeYrfouwjgO1hgHaEK?pid=ImgDet&rs=1'}}
                    />
                    <Card.Title 
                    title={'Roma (3 dias)'} 
                    right={(props) => <Button color="red">Selecionar</Button>}
                    />
                    <Card.Content>
                        <Paragraph>
                            R$ 800,00
                        </Paragraph>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Cover 
                    source={{uri:'https://th.bing.com/th/id/R.75bedab421c8767109665874aaf5ee3b?rik=bDW6ylkkhb3jxQ&pid=ImgRaw&r=0'}}
                    />
                    <Card.Title 
                    title={'Paris (5 dias)'} 
                    right={(props) => <Button color="red">Selecionar</Button>}
                    />
                    <Card.Content>
                        <Paragraph>
                            R$ 1800,00
                        </Paragraph>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Cover 
                    source={{uri:'https://www.hdwallpaper.nu/wp-content/uploads/2015/05/colosseum-1436103.jpg'}}
                    />
                    <Card.Title 
                    title={'Italia (4 dias)'} 
                    right={(props) => <Button color="red">Selecionar</Button>}
                    />
                    <Card.Content>
                        <Paragraph>
                            R$ 650,00
                        </Paragraph>
                    </Card.Content>
                </Card>
                </Produccard>
            </ScrollView>
        </ViewContainer>

    )

}