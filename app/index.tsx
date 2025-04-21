  import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { FontAwesome } from '@expo/vector-icons';
  import tw from 'twrnc';
  import ButtonPrimary from '@/components/ButtonPrimary';
  import { useRouter } from 'expo-router';
  import React from 'react';

  export default function Index() {
    const router = useRouter();
  
    const handleStartLearning = () => {
      router.push('/auth/register');
    };
  
    return (
      <SafeAreaView style={tw`flex-1 bg-black items-center justify-center p-4`}>
        <View style={tw`w-full h-2/5 items-center justify-center`}> 
          <Image 
            source={require('@/assets/images/TechX.png')} 
            style={tw`w-80 h-40`} 
            resizeMode='contain' 
          />
        </View>
  
        <Text style={tw`text-white text-lg font-bold text-center mt-4`}>
          Learn Investment {'\n'}& Personal Finance
        </Text>
        <Text style={tw`text-gray-400 text-sm text-center mt-2 px-6`}>
          Easy, practical & interactive learning by watching online videos with more than 150+ Videos from expert mentors.
        </Text>
  
        <View style={tw`flex-row mt-4`}>
        </View>
  
        <TouchableOpacity 
          style={tw`border border-white w-80 py-3 rounded-lg mt-4`}
          onPress={handleStartLearning}
        >
          <Text style={tw`text-white text-center font-bold`}>Start Learning</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          style={tw`bg-blue-500 w-80 py-3 rounded-lg mt-3`}
          onPress={() => router.push('/auth/signin')}
        >
          <Text style={tw`text-white text-center font-bold`}>Masuk</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  
