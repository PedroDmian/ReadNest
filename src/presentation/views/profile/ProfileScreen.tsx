import { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, RefreshControl } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function ProfileScreen() {
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View className='bg-dark-100 flex-1'>
      <SafeAreaView className="flex-1">
        <KeyboardAwareScrollView
            bounces={true}
            keyboardShouldPersistTaps={'never'}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={true}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
          <View className="flex-1">
            <Text className="text-xl font-bold text-red-500">
              Welcome to Profile Screen!
            </Text>

            <TouchableOpacity className="bg-blue-500 px-10 mt-5 py-2 rounded-lg">
              <Text className="text-white text-base font-semibold">Presionar</Text>
            </TouchableOpacity>

            <View className="flex-row px-4">
              <View className="w-1/2 p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>

              <View className="w-1/2 p-2">
                <Text className="text-center text-base text-white bg-green-500 p-4 rounded-md">
                  Columna 2
                </Text>
              </View>
            </View>

            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
            <View className="flex-row px-4">
              <View className="w-full p-2">
                <Text className="text-center text-base text-white bg-blue-500 p-4 rounded-md">
                  Columna 1
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
}

export default ProfileScreen;