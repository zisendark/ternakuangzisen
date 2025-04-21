import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import ButtonPrimary from '@/components/ButtonPrimary';

const SignInScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1 justify-center`}
      >
        <View style={tw`px-6 w-full items-center`}>
          

          {/* Header */}
          <Text style={tw`text-2xl font-bold mb-2 text-white`}>Create a Vidio Account</Text>
          <Text style={tw`text-base text-white text-center mb-8 px-4`}>
          Unlock all free features such as content recommendations and add to my list
          </Text>

          {/* Input Fields */}
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

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={tw`text-white text-right font-semibold mb-4`}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Tombol Sign In dengan ButtonPrimary */}
          <ButtonPrimary title="   Sign in   " bgBtn="[#33FF99]" bgText="black" rute="home" />

          {/* Social Login Section */}
          <View style={tw`w-full items-center mt-6 mb-4`}>
            <View style={tw`flex-row justify-center space-x-6 gap-3`}>
              {['apple', 'google', 'facebook'].map((platform) => (
                <TouchableOpacity 
                  key={platform}
                  style={tw`p-4 bg-gray-50 rounded-xl border border-gray-200`}
                >
                  <FontAwesome name={platform} size={24} color={platform === 'apple' ? '#000' : '#4285F4'} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={tw`flex-row mt-4`}>
            <Text style={tw`text-neutral-600 text-sm`}>
              Don't have a Vidio account?{' '}
            </Text>
            <TouchableOpacity>
              <Text style={tw`text-[#33FF99] text-sm font-medium`}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <Text style={tw`text-center mt-4 text-neutral-600 text-sm`}>
            By signing up, you agree to Vidio's
          </Text>
          <View style={tw`flex-row mt-1`}>
            <TouchableOpacity>
              <Text style={tw`text-[#33FF99] text-sm`}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={tw`text-neutral-600 text-sm`}> and </Text>
            <TouchableOpacity>
              <Text style={tw`text-[#33FF99] text-sm`}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
