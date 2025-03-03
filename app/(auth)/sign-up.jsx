import { View, Text, ScrollView, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, Link } from 'expo-router'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/firebaseConfig'

const SignUp
 = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''

  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username)
      //set it to global state...

      router.replace('/home')
    }
    catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
    }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView class>
        <View className="w-full justify-center min-h-[82vh] px-4 my-6">
          <Image source={images.logo}
          className="w-[200px] h-[100px]"
          resizeMode='contain'  />

          <Text className="text-2xl text-secondary-200 text-semibold mt-10 font-psemibold">
            Sign up to platesaver
          </Text>

          <FormField 
            
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form,
            username: e})}
            otherStyles="mt-10"
          />

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
            email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
            password: e})}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Sign Up"
            handlePress={submit}
            containerStyles= "mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row
          gap-2">
            <Text className="text-lg text-black-100 font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold
            text-secondary">
            Sign In
            </Link>

          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp