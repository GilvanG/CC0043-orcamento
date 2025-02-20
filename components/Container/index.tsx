import { PropsWithChildren } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../styles/colors";
import { MyHeader } from "../Header";

type IContainer = PropsWithChildren;

export const Container = ({ children }: IContainer) => {
  return (
    <View style={styles.container}>
      
        <View style={styles.top}>
          {/* <View style={styles.box}>
            <MyHeader title={"Orçamento"} goBack={true} />
          </View> */}
          <Svg
            height={30}
            width={Dimensions.get("screen").width}
            viewBox="0 110 1440 100"
            style={styles.topWavy}
          >
            <Path
              fill={colors.green}
              d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </Svg>
        </View>
        <ScrollView
        // stickyHeaderIndices={[0]}
        // showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>{children}</View>

        <View style={styles.bottom}>
          <Svg
            height={99}
            width={Dimensions.get("screen").width}
            viewBox="0 0 1440 290"
            style={styles.bottomWavy}
          >
            <Path
              fill={colors.green}
              d="M0,64L40,96C80,128,160,192,240,202.7C320,213,400,171,480,149.3C560,128,640,128,720,154.7C800,181,880,235,960,218.7C1040,203,1120,117,1200,74.7C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            />
          </Svg>
          <View style={styles.box}>
            <Image
              style={{
                width: 250,
                height: 50,
                resizeMode: "center",
                opacity: 1,
                tintColor: "#FFF",
                marginLeft: 75,
                marginBottom: 25,
              }}
              source={require("../../assets/Assinatura-Horizontal-Preta_Prancheta-1.png")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("screen").height,
    color: colors.brown,
  },
  top: {
    zIndex: 10,
  },
  bottom: {},
  box: {
    backgroundColor: colors.green,
    padding: 0,
    margin: 0,
  },
  topWavy: {
    padding: 0,
    margin: 0,
    position: "absolute",
  },
  bottomWavy: {},
  content: {
    paddingTop: 20,
    minHeight: Dimensions.get("screen").height * 0.66,
  },
});
