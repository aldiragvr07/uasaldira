import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// Define the type for theme
type Theme = {
  backgroundColor: string;
  textColor: string;
  headingColor: string;
};

const Drawer = createDrawerNavigator();

const themes: Record<string, Theme> = {
  light: {
    backgroundColor: '#f5f5f5',
    textColor: '#333',
    headingColor: '#6200ea',
  },
  dark: {
    backgroundColor: '#333',
    textColor: '#f5f5f5',
    headingColor: '#bb86fc',
  },
  blue: {
    backgroundColor: '#e0f7fa',
    textColor: '#004d40',
    headingColor: '#00796b',
  },
};

// Sample products data
const products = [
  { id: '1', name: 'Hot Wheels Racer', image: 'https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/004747-1_1.jpg', description: 'High-speed miniature car for racing enthusiasts.' },
  { id: '2', name: 'Hot Wheels Monster Truck', image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/18/0a1682c2-785a-4b58-b342-3fb2093d5c5a.jpg', description: 'Bold and powerful truck for off-road adventures.' },
  { id: '3', name: 'Hot Wheels Classic', image: 'https://down-th.img.susercontent.com/file/th-11134207-7r990-lt3qhqd8ysmm65', description: 'Timeless design with unmatched details.' },
  { id: '4', name: 'Hot Wheels Classic', image: 'https://down-th.img.susercontent.com/file/th-11134207-7r990-lt3qhqd8ysmm65', description: 'Timeless design with unmatched details.' },
  { id: '5', name: 'Hot Wheels Classic', image: 'https://down-th.img.susercontent.com/file/th-11134207-7r990-lt3qhqd8ysmm65', description: 'Timeless design with unmatched details.' },
  { id: '6', name: 'Hot Wheels Classic', image: 'https://down-th.img.susercontent.com/file/th-11134207-7r990-lt3qhqd8ysmm65', description: 'Timeless design with unmatched details.' },
];

const HomePage: React.FC<{ theme: Theme }> = ({ theme }) => (
  <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <Image source={{ uri: 'https://blog.logomyway.com/wp-content/uploads/2021/09/hot-wheels-logo.png' }} style={styles.logo} />
    <Text style={[styles.title, { color: theme.headingColor }]}>Welcome to the World of Hot Wheels</Text>
    <Text style={[styles.content, { color: theme.textColor }]}>
      Experience the thrill of speed, design, and creativity with our exclusive Hot Wheels collection.
    </Text>
    <Text style={[styles.subtitle, { color: theme.textColor }]}>Featured Products</Text>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={[
            styles.productCard,
            { backgroundColor: theme.backgroundColor, borderColor: theme.headingColor, borderWidth: 1 },
          ]}
        >
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={[styles.productName, { color: theme.headingColor }]}>{item.name}</Text>
            <Text style={[styles.productDescription, { color: theme.textColor }]}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  </View>
);


const ProductPage: React.FC<{ theme: Theme }> = ({ theme }) => (
  <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <Text style={[styles.title, { color: theme.headingColor }]}>Our Products</Text>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2} // Menampilkan produk dalam 2 kolom
      key={2} // Tambahkan key dinamis untuk memaksa ulang rendering
      renderItem={({ item }) => (
        <View
          style={[
            styles.productCardGrid,
            { backgroundColor: theme.backgroundColor, borderColor: theme.headingColor, borderWidth: 1 },
          ]}
        >
          <Image source={{ uri: item.image }} style={styles.productImageGrid} />
          <View style={styles.productInfo}>
            <Text style={[styles.productName, { color: theme.headingColor }]}>{item.name}</Text>
            <Text style={[styles.productDescription, { color: theme.textColor }]}>{item.description}</Text>
          </View>
          <Button
            title="View Details"
            onPress={() => alert(`Viewing details for: ${item.name}`)}
            color={theme.headingColor}
          />
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  </View>
);

const blogPosts = [
  {
    id: '1',
    title: 'Diskon THR Hot Wheels',
    image: 'https://hotwheelsindo.com/_next/static/media/promo1.85c7b1be.webp', // Ganti dengan URL asli
    description: 'THR cair waktunya checkout mobil Hot Wheels incaran di #bliblithr 😍🔥',
  },
  {
    id: '2',
    title: 'Hot Wheels 1.1 Super Shopping Day',
    image: 'https://hotwheelsindo.com/_next/static/media/promo2.999d8a31.webp', // Ganti dengan URL asli
    description: 'Exclusive Cars Hot Wheels Legends Tour 2023!',
  },
  {
    id: '3',
    title: 'Hot Wheels Let’s Race',
    image: 'https://hotwheelsindo.com/_next/static/media/promo3.0109043a.webp', // Ganti dengan URL asli
    description: 'Serial animasi Netflix yang terinspirasi oleh Hot Wheels.',
  },
  {
    id: '4',
    title: 'Hot Wheels Vintage Racer',
    image: 'https://hotwheelsindo.com/_next/static/media/promo4.fb825bfa.webp', // Ganti dengan URL asli
    description: 'Hot Wheels Vintage Racer siap mengajakmu kembali ke masa lalu.',
  },
];

const BlogPage: React.FC<{ theme: Theme }> = ({ theme }) => (
  <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <FlatList
      data={blogPosts}
      keyExtractor={(item) => item.id}
      numColumns={1} // Menampilkan blog dalam 1 kolom
      key={1} // Tambahkan key dinamis untuk memaksa ulang rendering
      renderItem={({ item }) => (
        <View
          style={[
            styles.blogCard,
            { backgroundColor: theme.backgroundColor, borderColor: theme.headingColor },
          ]}
        >
          <Image source={{ uri: item.image }} style={styles.blogImage} />
          <Text style={[styles.blogTitle, { color: theme.headingColor }]}>{item.title}</Text>
          <Text style={[styles.blogDescription, { color: theme.textColor }]}>{item.description}</Text>
          <Button title="Read More" color={theme.headingColor} onPress={() => {}} />
        </View>
      )}
    />
  </View>
);

const ContactPage: React.FC<{ theme: Theme }> = ({ theme }) => (
  <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <Text style={[styles.title, { color: theme.headingColor }]}>Contact Us</Text>
    <Text style={[styles.content, { color: theme.textColor }]}>
    Kami ingin sekali mendengar kabar dari Anda! Jika Anda memiliki pertanyaan, masukan, atau sekadar ingin menyapa, jangan ragu untuk menghubungi kami.
    </Text>
    <Text style={[styles.subtitle, { color: theme.headingColor }]}>Get in Touch</Text>
    <View style={[styles.contactInfo, { borderColor: theme.headingColor }]}>
      <Text style={[styles.contactText, { color: theme.textColor }]}>
        📧 Email: support@hotwheels.com
      </Text>
      <Text style={[styles.contactText, { color: theme.textColor }]}>
        📞 Phone: +1 800-555-1234
      </Text>
      <Text style={[styles.contactText, { color: theme.textColor }]}>
        📍 Address: 123 Hot Wheels Lane, Speed City, USA
      </Text>
    </View>
    <Text style={[styles.subtitle, { color: theme.headingColor }]}>Follow Us</Text>
    <View style={styles.socialIcons}>
      <Text style={[styles.contactText, { color: theme.textColor }]}>
        🌐 Website: www.hotwheels.com
      </Text>
      <Text style={[styles.contactText, { color: theme.textColor }]}>
        📸 Instagram: @hotwheels
      </Text>
      <Text style={[styles.contactText, { color: theme.textColor }]}>
        📘 Facebook: facebook.com/hotwheels
      </Text>
    </View>
  </View>
);

const AboutPage: React.FC<{ theme: Theme }> = ({ theme }) => (
  <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <Text style={[styles.title, { color: theme.headingColor }]}>About Us</Text>
    <Text style={[styles.content, { color: theme.textColor }]}>
      Welcome to the World of Hot Wheels! 🚗
    </Text>
    <Text style={[styles.content, { color: theme.textColor }]}>
    Kami sangat antusias menciptakan produk Hot Wheels yang inovatif dan mendebarkan yang menginspirasi anak-anak dan kolektor di seluruh dunia. Misi kami adalah menghadirkan mainan dan pengalaman berkualitas tinggi dan menarik yang memicu imajinasi dan gairah Anda terhadap kecepatan.    </Text>
    <Text style={[styles.subtitle, { color: theme.headingColor }]}>Our Vision</Text>
    <Text style={[styles.content, { color: theme.textColor }]}>
    - Untuk menghadirkan kegembiraan dan kreativitas kepada setiap penggemar mobil, muda atau tua.{"\n"}
    - Menjadi nama terdepan dalam desain mobil mini, inovasi, dan kesenangan.
    </Text>  
  </View>
);


export default function App() {
  const [theme, setTheme] = useState<Theme>(themes.light);

  return (
    
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.headingColor },
          headerTintColor: theme.textColor,
          drawerActiveTintColor: theme.headingColor,
          drawerInactiveTintColor: theme.textColor,
        }}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props} style={{ backgroundColor: theme.backgroundColor }}>
            <View style={{ padding: 20 }}>
              <Button title="Light Theme" onPress={() => setTheme(themes.light)} color={themes.light.headingColor} />
              <Button title="Dark Theme" onPress={() => setTheme(themes.dark)} color={themes.dark.headingColor} />
              <Button title="Blue Theme" onPress={() => setTheme(themes.blue)} color={themes.blue.headingColor} />
            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen name="Home" options={{ title: 'Home Page' }}>
          {() => <HomePage theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="Product" options={{ title: 'Product' }}>
          {() => <ProductPage theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="Blog" options={{ title: 'Blog' }}>
          {() => <BlogPage theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="About" options={{ title: 'About Us' }}>
          {() => <AboutPage theme={theme} />}
        </Drawer.Screen>
        <Drawer.Screen name="Contact" options={{ title: 'Contact Us' }}>
          {() => <ContactPage theme={theme} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
  productCard: {
    flexDirection: 'row',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  productDescription: {
    fontSize: 14,
  },
  productCardGrid: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 8, // Margin lebih kecil agar muat lebih baik
    padding: 8, // Padding lebih kecil
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    maxWidth: '45%', // Lebih kecil untuk mengakomodasi ruang ekstra
  },
  productImageGrid: {
    width: 100, // Ukuran gambar lebih kecil
    height: 100, // Ukuran gambar lebih kecil
    borderRadius: 8,
    marginBottom: 8, // Margin bawah lebih kecil
  },
  
  blogCard: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Teks rata kiri
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 10, // Margin atas/bawah
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '100%', // Lebar penuh
    borderWidth: 1,
  },
  blogImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  blogDescription: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 10,
  },
  contactInfo: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  contactText: {
    fontSize: 16,
    marginVertical: 5,
  },
  socialIcons: {
    marginTop: 10,
    alignItems: 'flex-start',
    width: '100%',
  },
  
});
