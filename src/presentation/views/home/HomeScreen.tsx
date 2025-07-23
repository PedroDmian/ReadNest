import { useEffect, useState } from 'react';
import {
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';

import { INavigationProps } from '../../../domain/models/INavigation';

import Button from '../../components/Button';
import Search from '../../components/Search';
import Badges from '../../components/Badges';
import Carousel from '../../components/Carousel';
import Title from '../../components/Title';
import Cover from '../../components/widgets/Cover';

const HomeScreen = ({ navigation, route }: INavigationProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState('Damian Palomo Palomo');

  const [badgesTitles, setBadgesTitles] = useState([
    'Popular',
    'Romance',
    'Fantiction',
    'Poetry',
    'Terror',
    'Action',
    'Novel',
    'Design'
  ]);
  const [selectionBadges, setSelectionBadges] = useState(0);

  useEffect(() => {
    console.log('HomeScreen mounted');
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <KeyboardAwareScrollView
      bounces={true}
      keyboardShouldPersistTaps={'never'}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={true}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className='flex-1 justify-start items-start'>
        <View className='w-full justify-center items-start relative mt-2'>
          <Text className='text-davygray text-xl font-mona'>
            Good Morning,
          </Text>
          <Text className='text-dark text-3xl font-monaExtraBold tracking-widest mt-2 w-80'>
            Damian Palomo
          </Text>

          <View className='absolute top-0 right-0 opacity-0'>
            <Button
              icon={<Icon name='notifications-outline' size={25} color='white' />}
              onPress={() => console.log('Notifications pressed')}
              styleType={'dark'}
              classNameTouch='p-2'
            />
          </View>
        </View>

        <Search search={search} setSearch={setSearch} />

        <View className='w-full mt-3'>
          <Carousel className='w-full'>
            {
              badgesTitles.map((title, index) => (
                <TouchableOpacity
                  onPress={() => setSelectionBadges(index)} key={index}
                >
                  <Badges
                    key={index}
                    title={title}
                    isActive={index === selectionBadges}
                    classStyle={
                      index === selectionBadges
                        ? { classNameContainer: 'bg-dark', classNameText: 'text-white' }
                        : {}
                    }
                  />
                </TouchableOpacity>
              ))
            }
          </Carousel>
        </View>

        <View className='w-full'>
          <Title
            title={'Popular Books'}
            subtitle={'Discover the most popular books right now'}
          />

          <Carousel className='w-full py-1 px-1'>
            <Cover
              id='1'
              title={'The Great Gatsby'}
              subtitle={'F. Scott Fitzgerald'}
              image={'https://descubierta.es/wp-content/uploads/2024/04/portada-leyesfuego.jpg'}
              rating={4.5}
              onPress={(id) => navigation.navigate('BookScreen', { 
                id, 
                image: `https://descubierta.es/wp-content/uploads/2024/04/portada-leyesfuego.jpg`,
                title: 'Leyes de Fuego',
                progress: 89,
                description: 'A thrilling journey through the realms of fantasy and adventure.',
                author: 'Damian Palomo',
                history: `This book takes you on a journey through a world where magic and reality intertwine, exploring themes of courage, friendship, and the battle between good and evil. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
              })}
              onPressFavorite={(id) => console.log(`Favorite book with id: ${id}`)}
            />
            <Cover
              id='2'
              title={'The Great Gatsby'}
              subtitle={'F. Scott Fitzgerald'}
              image={'https://edit.org/img/blog/yrm-1024-plantillas-ebook-gratis-editables-online.webp'}
              rating={5}
              onPress={(id) => navigation.navigate('BookScreen', { 
                id, 
                image: `https://edit.org/img/blog/yrm-1024-plantillas-ebook-gratis-editables-online.webp`,
                title: 'El Laberinto de los susurros',
                progress: 89,
                description: 'A captivating tale of mystery and intrigue.',
                author: 'Damian Palomo',
                history: 'This book delves into the secrets of an ancient labyrinth, where whispers of the past guide the protagonist through a maze of challenges and revelations.',
              })}
              onPressFavorite={(id) => console.log(`Favorite book with id: ${id}`)}
            />
            <Cover
              id='3'
              title={'The Great Gatsby'}
              subtitle={'F. Scott Fitzgerald'}
              image={'https://marketplace.canva.com/EAEgQSQD46I/1/0/1024w/canva-portada-de-libro-autobiogr%C3%A1fico-con-fot%C3%B3grafo-marr%C3%B3n-Kc4f08P0jS4.jpg'}
              rating={3.5}
              onPress={(id) => navigation.navigate('BookScreen', { 
                id, 
                image: `https://marketplace.canva.com/EAEgQSQD46I/1/0/1024w/canva-portada-de-libro-autobiogr%C3%A1fico-con-fot%C3%B3grafo-marr%C3%B3n-Kc4f08P0jS4.jpg`,
                title: 'Mi Hogaren miles de lugares',
                progress: 89,
                description: 'A heartwarming story of finding home in unexpected places.',
                author: 'F. Scott Fitzgerald',
                history: 'This book explores the journey of self-discovery and the search for belonging, weaving a narrative that resonates with anyone who has ever felt out of place.',
              })}
              onPressFavorite={(id) => console.log(`Favorite book with id: ${id}`)}
            />
          </Carousel>
        </View>
        
        <View className='w-full'>
          <Title
            title={'Authors'}
            subtitle={'Discover the most popular authors right now'}
          />

          <Carousel className='w-full py-1 px-1'>
            <Cover
              id='1'
              title={'The Great Gatsby'}
              subtitle={'F. Scott Fitzgerald'}
              image={'https://marketplace.canva.com/EAFQ6QRNlEU/1/0/1003w/canva-car%C3%A1tula-de-libros-de-ciencia-ficci%C3%B3n-verde-y-rosa-D45iCPGnKec.jpg'}
              rating={4.5}
              onPress={(id) => navigation.navigate('BookScreen', { id })}
              onPressFavorite={(id) => console.log(`Favorite book with id: ${id}`)}
            />
            <Cover
              id='1'
              title={'The Great Gatsby'}
              subtitle={'F. Scott Fitzgerald'}
              image={'https://marketplace.canva.com/EAFutLMZJKs/1/0/1003w/canva-portada-libro-novela-suspenso-elegante-negro-wxuYB_sJtMw.jpg'}
              rating={5}
              onPress={(id) => navigation.navigate('BookScreen', { id })}
              onPressFavorite={(id) => console.log(`Favorite book with id: ${id}`)}
            />
            <Cover
              id='1'
              title={'The Great Gatsby'}
              subtitle={'F. Scott Fitzgerald'}
              image={'https://marketplace.canva.com/EAFGf9027eM/1/0/1003w/canva-portada-libro-infantil-bosque-ilustrado-azul-P3McSjgOm1I.jpg'}
              rating={3.5}
              onPress={(id) => navigation.navigate('BookScreen', { id })}
              onPressFavorite={(id) => console.log(`Favorite book with id: ${id}`)}
            />
          </Carousel>
        </View>

      </View>

    </KeyboardAwareScrollView>
  );
}

export default HomeScreen;