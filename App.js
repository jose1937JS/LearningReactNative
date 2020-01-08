import React, { Component } from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Header, Title, Content, Footer, FooterTab,
	Button, Left, Right, Body, Icon, Text, Card, CardItem,
	Thumbnail, List, ListItem, CheckBox, DeckSwiper, Fab } from 'native-base';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

let checkboxstatus = false;

const cards = [
	{
		text: 'Maldito Deck Swiper',
		name: 'One',
		image: require('./assets/img/img2.jpg')
	},
	{
		text: 'Maldito Deck Swiper',
		name: 'Thow',
		image: require('./assets/img/img.jpg')
	},
];

export default class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			isReady: false,
			date: new Date(),
			mode: 'date',
			show: false,
			active: false
		}
	}

	setDate = (ev, date) => {
		date = date || this.state.date;

		this.setState({
			show: Platform.OS === 'ios' ? true: false,
			date,
		});
	}

	show = (mode) => {
		this.setState({
			show: true,
			mode,
		});
	}

	datepicker = () => {
		this.show('date');
	}

	timepicker = () => {
		this.show('time');
	}


	async componentDidMount(){
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font
		});
		this.setState({ isReady: true });
	}


	render() {

		const { show, date, mode } = this.state;

		if (!this.state.isReady) {
			return <AppLoading />;
		}

		return (
			<Container style={styles.container}>

				<Header>
					<Button transparent ><Icon name="menu" /></Button>
					<Body>
						<Title>Probando componentes &lt;3</Title>
					</Body>

				</Header>

				<Content padder>

					<View style={{ marginBottom: 480 }}>
						<DeckSwiper
							dataSource={cards}
							renderItem = { item =>

								<Card style={{ elevation: 3 }}>
									<CardItem>
										<Left>
											<Thumbnail source={item.image} />
											<Body>
												<Text>{ item.text }</Text>
												<Text note>NativeBase</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem cardBody>
										<Image style={{ height: 300, flex: 1 }} source={ item.image } />
									</CardItem>
									<CardItem >
										<Icon name="heart" style={{ color: 'red' }} />
										<Text>{ item.name }</Text>
									</CardItem>
								</Card>

							}
						/>
					</View>

					<Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore porro autem omnis tenetur, animi officiis consequatur ut ducimus, ab quo est enim voluptas illum in quod, et pariatur architecto. Maiores.</Text>

					<View style={styles.marginY}></View>

					<Button iconLeft danger onPress={() => alert('you touched me :*')}>
						<Icon name="gesture-tap" type="MaterialCommunityIcons" />
 						<Text>Tap me</Text>
					</Button>

					<View style={styles.marginY}></View>

					<Card>
						<CardItem header bordered>
							<Text>Card List with icons </Text>
							<Icon name="heart" style={{color: 'red', fontSize: 13, marginLeft: 10}}></Icon>
						</CardItem>
						<CardItem bordered button>
							<Icon name="logo-facebook" style={{color: 'navy'}}></Icon>
							<Text>Facebook</Text>
							<Right>
								<Icon name="arrow-forward"></Icon>
							</Right>
						</CardItem>
						<CardItem bordered button>
							<Icon name="logo-twitter" style={{color: 'deepskyblue'}}></Icon>
							<Text>Twitter</Text>
							<Right>
								<Icon name="arrow-forward"></Icon>
							</Right>
						</CardItem>
						<CardItem bordered button>
							<Icon name="logo-google" style={{color: 'red'}}></Icon>
							<Text>Google</Text>
							<Right>
								<Icon name="arrow-forward"></Icon>
							</Right>
						</CardItem>
						<CardItem bordered button>
							<Icon name="logo-github"></Icon>
							<Text>Github</Text>
							<Right>
								<Icon name="arrow-forward"></Icon>
							</Right>
						</CardItem>
						<CardItem bordered button>
							<Icon name="logo-html5" style={{color: 'darkorange'}}></Icon>
							<Text>HTML5</Text>
							<Right>
								<Icon name="arrow-forward"></Icon>
							</Right>
						</CardItem>
						<CardItem bordered button>
							<Icon name="logo-css3" style={{color: 'blue'}}></Icon>
							<Text>CSS3</Text>
							<Right>
								<Icon name="arrow-forward"></Icon>
							</Right>
						</CardItem>
						<CardItem bordered button>
							<Icon name="logo-javascript" style={{color: 'yellow'}}></Icon>
							<Text>Javascript</Text>
							<Right>
								<Icon name="arrow-forward"></Icon>
							</Right>
						</CardItem>
					</Card>

					<View style={styles.marginY}></View>

					<Card>
						<CardItem>
							<Left>
								<Thumbnail source={require('./assets/img/native-base.png')} />
								<Body>
									<Text>NativeBase</Text>
									<Text note>GeekyAnts</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem cardBody>
							<Image source={require('./assets/img/img.jpg')} style={{height: 300, width: null, flex: 1}} />
						</CardItem>
						<CardItem bordered>
							<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quod, architecto voluptatum libero nisi tenetur excepturi neque fugiat.</Text>
						</CardItem>
						<CardItem bordered>
							<Left>
								<View style={styles.between}>
									<Button transparent>
										<Icon name="heart" style={{color: 'red'}} />
										<Text style={{color: 'red'}}>2.926</Text>
										<Right />
									</Button>
									<Button transparent>
										<Icon name="comments" type="FontAwesome" style={{color: 'skyblue'}} />
										<Text style={{color: 'skyblue', textAlign: 'left'}}>9</Text>
										<Right />
									</Button>
									<Button transparent>
										<Icon name="share" type="FontAwesome" style={{color: 'blue'}} />
										<Text style={{color: 'blue'}}>26</Text>
										<Right />
									</Button>
								</View>
							</Left>
						</CardItem>
					</Card>

					<View style={styles.marginY}></View>

					<List>
						<ListItem itemDivider >
							<Text>Lenguajes de Programación</Text>
						</ListItem>
						<ListItem>
							<View style={styles.between}>
								<Text>Javascript</Text>
								<Icon type="MaterialCommunityIcons" name="language-javascript" />
							</View>
						</ListItem>
						<ListItem>
							<View style={styles.between}>
								<Text>PHP</Text>
								<Icon type="MaterialCommunityIcons" name="language-php" />
							</View>
						</ListItem>
						<ListItem>
							<View style={styles.between}>
								<Text>Java</Text>
								<Icon type="MaterialCommunityIcons" name="language-java" />
							</View>
						</ListItem>
						<ListItem>
							<View style={styles.between}>
								<Text>Python</Text>
								<Icon type="MaterialCommunityIcons" name="language-python" />
							</View>
						</ListItem>
						<ListItem itemDivider >
							<Text>Lenguajes de maquetado y estilo</Text>
						</ListItem>
						<ListItem>
							<View style={styles.between}>
								<Text>HTML5</Text>
								<Icon type="MaterialCommunityIcons" name="language-html5" />
							</View>
						</ListItem>
						<ListItem>
							<View style={styles.between}>
								<Text>CSS3</Text>
								<Icon type="MaterialCommunityIcons" name="language-css3" />
							</View>
						</ListItem>
					</List>

					<View style={styles.marginY}></View>

					<ListItem>
						<CheckBox checked={true} />
						<Body>
							<Text>CheckBox Component</Text>
						</Body>
					</ListItem>
					<ListItem>
						<CheckBox checked={false} color="darkorange" />
						<Body>
							<Text>CheckBox Orange Component</Text>
						</Body>
					</ListItem>
					<ListItem>
						<CheckBox color="green" checked={checkboxstatus} onPress={() => checkboxstatus = !checkboxstatus} />
						<Body>
							<Text>CheckBox dinamic Component</Text>
						</Body>
					</ListItem>

					<View style={styles.marginY}></View>

					<View style={styles.around}>
						<Button onPress={ this.datepicker }><Text>DatePicker</Text></Button>
						<Button onPress={ this.timepicker }><Text>TimePicker</Text></Button>
					</View>
					<View style={styles.center}>
						{ show &&
							<DateTimePicker
								value={date}
								mode={mode}
								is24Hour={true}
								display="default"
								onChange={this.setDate}
							/>
						}
					</View>
					<Text style={{marginTop: 20, textAlign: 'center'}}>{ new Date(date).toString().split('GMT')[0] }</Text>

					<View style={styles.marginY}></View>

					<View style={{ flex: 1 }} >
						<Fab
							active={ this.state.active }
							direction="up"
							style={{ backgroundColor: 'darkorange' }}
							position="bottoRight"
							onPress={() => this.setState({ active: !this.state.active })} >

							<Icon name="share" />

							<Button style={{ backgroundColor: 'orange' }}>
								<Icon name="logo-facebook" />
							</Button>

							<Button disabled style={{ backgroundColor: '#DD5144' }}>
								<Icon name="mail" />
							</Button>

						</Fab>
					</View>

				</Content>


				{/*<Footer>
					<FooterTab>
						<Button full>
							<Text>HEcho por Jose Lopez &lt;3</Text>
						</Button>
					</FooterTab>
				</Footer>*/}
			</Container>


		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 23
	},
	text: {
		textAlign: 'center'
	},
	marginY: {
		marginTop: 20,
		marginBottom: 20
	},
	between: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	around: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	center: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	}
});
