import { Image, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import React from 'react';

const menuItems = [
  { name: 'Modul Akademi', icon: 'book' },
  { name: 'Community', icon: 'people' },
  { name: 'Event Live', icon: 'ticket' },
  { name: 'Grup Diskusi', icon: 'chatbubbles' }
];

const upcomingEvents = [
  {
    date: 'Hari ini, 26 Jun - 19:00',
    title: 'Road to Masterclass with Timothy Ronald',
    image: require('@/assets/images/warkop1.png')
  },
  {
    date: 'Besok, 27 Jun - 13:30',
    title: 'PastiPahamInvestasi - Pilihan Saham ESG',
    image: require('@/assets/images/warkop2.png')
  }
];

export default function HomeScreen() {
  const renderHeader = () => (
    <View style={tw`p-4 flex-row justify-between items-center bg-black`}>
      <Text style={tw`text-white text-xl font-bold`}>Hai, Calon Sultan!</Text>
      <Ionicons name="notifications-outline" size={28} color="white" />
    </View>
  );

  const renderNotificationBanner = () => (
    <View style={tw`flex-row items-center bg-[#1A1A1A] mx-4 mt-4 p-4 rounded-xl`}>
      <View style={tw`bg-[#333333] p-2 rounded-full`}>
        <MaterialCommunityIcons name="bell" size={24} color="white" />
      </View>
      <View style={tw`flex-1 ml-2`}>
        <Text style={tw`text-white`}>
          Nikmati insight, berita dan update terkini,{' '}
          <Text style={tw`text-green-500 underline`}>nyalakan notifikasi</Text>
        </Text>
      </View>
      <MaterialCommunityIcons name="close" size={24} color="white" />
    </View>
  );

  const renderFeaturedCarousel = () => (
    <View style={tw`px-4 mt-4`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={tw`gap-4`}
      >
        <Image
          source={require('@/assets/images/warkop1.png')}
          style={tw`w-40 h-30 rounded-lg`}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/warkop2.png')}
          style={tw`w-40 h-30 rounded-lg`}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/warkop4.png')}
          style={tw`w-40 h-30 rounded-lg`}
          resizeMode="cover"
        />
      </ScrollView>
    </View>
  );

  const renderMenuButtons = () => (
    <View style={tw`px-4 mt-4`}>
      <View style={tw`flex-row flex-wrap justify-between`}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={tw`bg-gray-900 w-[48%] p-4 rounded-xl mb-4 flex-row items-center justify-between border-l-4 border-green-500`}
          >
            <View style={tw`flex-row items-center`}>
              <Ionicons name={item.icon} size={24} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white text-base font-medium`}>{item.name}</Text>
            </View>
            {item.isNew && (
              <View style={tw`bg-green-500 px-2 py-1 rounded-full`}>
                <Text style={tw`text-black text-xs font-bold`}>NEW</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderFinancialTest = () => (
    <View style={tw`flex-row items-center bg-[#1A1A1A] mx-4 mt-4 p-2 rounded-xl`}>
      <Image
        source={require('@/assets/images/warkop1.png')}
        style={tw`w-16 h-16 rounded-xl`}
        resizeMode="cover"
      />
      <View style={tw`flex-1 pl-5`}>
        <Text style={tw`text-white font-bold text-lg`}>
          Yuk, Ikuti <Text style={tw`text-green-500`}>Tes Finansial!</Text>
        </Text>
        <Text style={tw`text-gray-400 text-xs mt-1`}>
          Kenali profil keuanganmu sekarang
        </Text>
      </View>
      <View style={tw`pr-2 pl-4 border-l-2 border-gray-700`}>
        <View style={tw`bg-green-500 p-2 rounded-full`}>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </View>
      </View>
    </View>
  );

  const renderUpcomingEvents = () => (
    <View style={tw`px-4 mt-6`}>
      <Text style={tw`text-white text-xl font-bold mb-4`}>
        Ikuti Live Event Terdekat
      </Text>
      {upcomingEvents.map((event, index) => (
        <TouchableOpacity
          key={index}
          style={tw`bg-gray-900 p-3 rounded-xl mb-3 flex-row items-center`}
        >
          <Image
            source={event.image}
            style={tw`w-16 h-16 rounded-lg`}
            resizeMode="cover"
          />
          <View style={tw`flex-1 ml-3`}>
            <Text style={tw`text-green-400 text-sm font-medium`}>
              {event.date}
            </Text>
            <Text style={tw`text-white font-bold text-base mt-1 pr-4`}>
              {event.title}
            </Text>
            <View style={tw`flex-row items-center mt-2`}>
              <View style={tw`bg-green-500/20 px-2 py-1 rounded`}>
                <Text style={tw`text-green-500 text-xs font-bold`}>FREE</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
  

  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <ScrollView>
        {renderHeader()}
        {renderNotificationBanner()}
        {renderFeaturedCarousel()}
        {renderMenuButtons()}
        {renderFinancialTest()}
        {renderUpcomingEvents()}
      </ScrollView>
    </SafeAreaView>
  );
}
