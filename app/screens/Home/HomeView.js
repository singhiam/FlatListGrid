import React, { Component } from 'react';
import {
    Image, TouchableOpacity, View
} from 'react-native';
import {
    Container, Header, Content, Footer, FooterTab,
    Button, Left, Text, Title, Right, Body, Picker, Icon, Row
} from 'native-base';
import {
    SearchBar
} from 'react-native-elements';
import styles from './styles';
import images from '../../config/images';
import GridList from 'react-native-grid-list';

const items = [
    {
        thumbnail: {
            uri: images.icons.logo,
            priceOne: '8 lbs. / $',
            priceTwo: '10 lbs'
        }
    },
    {
        thumbnail: {
            uri: images.icons.logo,
            priceOne: '8 lbs. / $',
            priceTwo: '10 lbs'
        }
    },
    {
        thumbnail: {
            uri: images.icons.logo,
            priceOne: '8 lbs. / $',
            priceTwo: '10 lbs'
        }
    },
    {
        thumbnail: {
            uri: images.icons.logo,
            priceOne: '8 lbs. / $',
            priceTwo: '10 lbs'
        }
    }, {
        thumbnail: {
            uri: images.icons.logo,
            priceOne: '8 lbs. / $',
            priceTwo: '10 lbs'
        }
    }, {
        thumbnail: {
            uri: images.icons.logo,
            priceOne: '8 lbs. / $',
            priceTwo: '10 lbs'
        }
    },
];

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'key1',
            gridColumn: 2
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    renderItem = ({ item, index }) => (
        <View style={styles.gridItem} source={item.thumbnail.uri}>
            <Image style={styles.favIcon} source={images.icons.favIcon} />
            <Image style={styles.gridItemImage} source={item.thumbnail.uri} />
            <Text style={styles.priceOneText}>{item.thumbnail.priceOne}</Text>
            <Text style={styles.priceTwoText}>{item.thumbnail.priceTwo}</Text>
            <Image style={styles.cashIcon} source={images.icons.cashIcon} />
        </View>
    );

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button hasText transparent>
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title><Text>SHOP</Text></Title>
                    </Body>
                    <Right>
                        <Button hasText transparent>
                            <Text>Cancel</Text>
                        </Button>
                    </Right>
                </Header>
                <SearchBar
                    lightTheme
                    platform="ios"
                    containerStyle={styles.searchBar}
                    placeholder="Type Here..."
                />
                <Content style={styles.container}>
                    <Row style= {styles.pickerContainer}>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            style= {styles.pickerStyle}
                            selectedValue={
                                this.state.selected
                            }
                            itemStyle = {
                                styles.pickerItem
                            }
                            onValueChange={
                                this.onValueChange.bind(this)
                            }
                        >
                            <Picker.Item itemStyle= {styles.pickerItem} label="Pounds Captured" value="key0" />
                            <Picker.Item itemStyle= {styles.pickerItem} label="Dollars Captured" value="key1" />
                            <Picker.Item itemStyle= {styles.pickerItem} label="Euro Captured" value="key2" />
                        </Picker>
                        <View style={styles.iconView}>
                            <TouchableOpacity onPress={() => {this.setState({gridColumn: 3});}}>
                                <Image style={styles.iconStyle} source={images.icons.gridIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {this.setState({gridColumn: 2});}}>
                                <Image style={styles.iconStyle} source={images.icons.thumbIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {this.setState({gridColumn: 1});}}>
                                <Image style={styles.iconStyle} source={images.icons.listIcon} />
                            </TouchableOpacity>
                        </View>
                    </Row>
                    <View style={styles.gridContainer}>
                        <GridList
                            data={items}
                            numColumns={this.state.gridColumn}
                            key={this.state.gridColumn}
                            renderItem={this.renderItem}
                        />
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical >
                            <Icon name="star-outline" />
                        </Button>
                        <Button vertical >
                            <Icon name="star-outline" />
                        </Button>
                        <Button vertical active>
                            <Icon name="card" />
                        </Button>
                        <Button vertical >
                            <Icon name="apps" />
                        </Button>
                        <Button vertical >
                            <Icon name="options" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default HomeView;
