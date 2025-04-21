import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import ButtonPrimary from '@/components/ButtonPrimary';
import { useRouter } from 'expo-router';
import React from 'react';

export default function OnboardingScreen() {
  const navigation = useRouter();
  const [showLogin, setShowLogin] = React.useState(false);

  const handleStartLearning = () => {
    setShowLogin(true);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1 justify-center`}
      >
        <View style={tw`px-6 w-full items-center`}>
          
          <Text style={tw`text-2xl font-bold mb-2 text-white`}>Login Here</Text>
          <Text style={tw`text-base text-white text-center mb-8 px-4`}>
            Get content recommendations and download your favorite videos
          </Text>

          <View style={tw`w-full space-y-4 mb-6`}>
            <View>
              <Text style={tw`text-sm font-medium text-white mb-1 ml-1`}>Email</Text>
              <TextInput
                style={tw`w-full bg-gray-50 p-4 rounded-xl border border-gray-200`}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text style={tw`text-sm font-medium text-white mb-1 ml-1`}>Password</Text>
              <TextInput
                style={tw`w-full bg-gray-50 p-4 rounded-xl border border-gray-200`}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>
          </View>

          <TouchableOpacity>
            <Text style={tw`text-white text-right font-semibold mb-6`}>Forgot Password?</Text>
          </TouchableOpacity>

          <ButtonPrimary title="Login" bgBtn="[#33FF99]" bgText="black" rute="(tabs)/home" />

          <View style={tw`w-full items-center mt-2 mb-6`}>
            <View style={tw`flex-row justify-center space-x-6 gap-3`}>
            </View>
          </View>

          <View style={tw`flex-row`}>
            <Text style={tw`text-gray-600`}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("/auth/register")}>
              <Text style={tw`text-[#33FF99] font-bold`}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
