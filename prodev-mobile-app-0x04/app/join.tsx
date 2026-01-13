import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Sign up now to get started with ProDev Mobile</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formControl} placeholder="Enter your full name" />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" keyboardType="email-address" />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} placeholder="Enter your password" secureTextEntry />
          <Text style={{ color: "#34967C", fontWeight: "500" }}>Show</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={[styles.secondaryButton, { borderColor: "#EA4335" }]}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.secondaryButton, { borderColor: "#1877F2" }]}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Sign up with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={styles.signupSubTitleText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
