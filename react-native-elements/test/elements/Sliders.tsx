import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Button} from 'react-native';
import {Slider, Text, Icon} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type SlidersComponentProps = {};

const Sliders: React.FunctionComponent<SlidersComponentProps> = () => {
  const [value, setValue] = useState(10);
  const [vertValue, setVertValue] = useState(10);
  const [sliderStrat, setSliderStrat] = useState(false);
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState(10);
  const [value3, setValue3] = useState(10);
  const [value4, setValue4] = useState(10);
  const [value5, setValue5] = useState(10);
  const [value6, setValue6] = useState(10);
  const [value7, setValue7] = useState(10);
  const [value8, setValue8] = useState(10);
  const [value9, setValue9] = useState(10);
  const [value10, setValue10] = useState(10);
  const [value11, setValue11] = useState(10);
  const [value12, setValue12] = useState(10);

  const [animateTransitinsValue, setAnimateTransitinsValue] = useState(0);
  const [animationConfigValue, setAnimationConfigValue] = useState(0);
  const [animationTypeValue, setAnimationTypeValue] = useState(0);
  const [animateTransitinsFlag, setAnimateTransitinsFlag] = useState(true);
  const [animationConfigFlag, setAnimationConfigFlag] = useState(500);
  const [animationTypeFlag, setAnimationTypeFlag] = useState<'spring' | 'timing'>('spring');
  const interpolate = (start: number, end: number) => {
    let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Slider属性allowTouchTrack  允许拖动slider">
          <TestCase itShould="allowTouchTrack" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider allowTouchTrack />
            </View>
          </TestCase>
        </TestSuite>

        {/* 与iOS保持一致 */}
        <TestSuite name="Slider属性animateTransitions  拖动时有动画效果">
          <TestCase itShould="animateTransitions" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                minimumValue={0}
                maximumValue={10}
                value={animateTransitinsValue}
                onValueChange={setAnimateTransitinsValue}
                allowTouchTrack
                animateTransitions={animateTransitinsFlag}
                animationConfig={{
                  toValue: 10,
                  duration: 1000,
                  useNativeDriver: false,
                }}
                animationType='timing'
              />
              <Button title='Press to change the value to 2' onPress={() => { setAnimateTransitinsValue(2) }} />
              <Button title='Press to change the value to 8' onPress={() => { setAnimateTransitinsValue(8) }} />
              <Button title={'animateTransitions:' + animateTransitinsFlag} onPress={() => { setAnimateTransitinsFlag(!animateTransitinsFlag) }} />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性animationConfig  动画配置">
          <TestCase itShould="animationConfig" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                minimumValue={0}
                maximumValue={10}
                value={animationConfigValue}
                onValueChange={setAnimationConfigValue}
                allowTouchTrack
                animateTransitions={true}
                animationConfig={{
                  toValue: 10,
                  duration: animationConfigFlag,
                  useNativeDriver: false,
                }}
                animationType="timing"
              />
              <Button title='Press to change the value to 2' onPress={() => { setAnimationConfigValue(2) }} />
              <Button title='Press to change the value to 8' onPress={() => { setAnimationConfigValue(8) }} />
              <Button
                title={'animationConfig.duration:' + animationConfigFlag}
                onPress={() => {
                  setAnimationConfigFlag(animationConfigFlag === 500 ? 3000 : 500)
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性animationType 设置动画类型">
          <TestCase itShould="animationType" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                minimumValue={0}
                maximumValue={10}
                value={animationTypeValue}
                onValueChange={setAnimationTypeValue}
                allowTouchTrack
                animateTransitions={true}
                animationConfig={animationTypeFlag === 'spring' ?
                  {
                    toValue: value2,
                    useNativeDriver: false,
                  } :
                  {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: false,
                  }}
                animationType={animationTypeFlag}
              />
              <Button title='Press to change the value to 2' onPress={() => { setAnimationTypeValue(2) }} />
              <Button title='Press to change the value to 8' onPress={() => { setAnimationTypeValue(8) }} />
              <Button
                title={'animationType:' + animationTypeFlag}
                onPress={() => {
                  setAnimationTypeFlag(animationTypeFlag === 'spring' ? 'timing' : 'spring')
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性containerStyle 设置容器样式">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                allowTouchTrack
                animateTransitions={true}
                animationConfig={{
                  toValue: 1000,
                  duration: 100,
                  useNativeDriver: true,
                }}
                animationType="timing"
                containerStyle={{
                  containerHorizontal: {
                    height: 100,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 100,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性debugTouchArea 修改点击区域样式  ">
          <TestCase itShould="debugTouchArea" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                allowTouchTrack
                animateTransitions={true}
                animationConfig={{
                  toValue: 1000,
                  duration: 100,
                  useNativeDriver: true,
                }}
                debugTouchArea={true}
                animationType="timing"
                containerStyle={{
                  containerHorizontal: {
                    height: 100,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 100,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'green',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性disabled 设置为true slider将无法拖动 ">
          <TestCase itShould="disabled 为true" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                allowTouchTrack
                animateTransitions={true}
                animationConfig={{
                  toValue: 1000,
                  duration: 100,
                  useNativeDriver: true,
                }}
                disabled={true}
                debugTouchArea={true}
                animationType="timing"
                containerStyle={{
                  containerHorizontal: {
                    height: 10,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 10,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'green',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
            </View>
          </TestCase>
          <TestCase itShould="disabled 为false" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                allowTouchTrack
                animateTransitions={true}
                animationConfig={{
                  toValue: 1000,
                  duration: 100,
                  useNativeDriver: true,
                }}
                disabled={false}
                debugTouchArea={true}
                animationType="timing"
                containerStyle={{
                  containerHorizontal: {
                    height: 10,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 10,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'green',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性maximumTrackTintColor slider未拖动到的颜色">
          <TestCase itShould="maximumTrackTintColor" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                allowTouchTrack
                animateTransitions={true}
                animationConfig={{
                  toValue: 1000,
                  duration: 100,
                  useNativeDriver: true,
                }}
                maximumTrackTintColor={'pink'}
                animationType="timing"
                containerStyle={{
                  containerHorizontal: {
                    height: 100,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 10,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'green',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性maximumValue slider的最大值为maximumValue设置的值 当前设置为40">
          <TestCase itShould="maximumValue" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                allowTouchTrack
                onSlidingComplete={(value)=>{setValue3(value)}}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                containerStyle={{
                  containerHorizontal: {
                    height: 100,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 10,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'green',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value3}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性minimumTrackTintColor slider已拖动的颜色">
          <TestCase itShould="minimumTrackTintColor" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                allowTouchTrack
                animateTransitions={true}
                animationConfig={{
                  toValue: 1000,
                  duration: 100,
                  useNativeDriver: true,
                }}
                minimumTrackTintColor={'green'}
                maximumTrackTintColor={'pink'}
                animationType="timing"
                containerStyle={{
                  containerHorizontal: {
                    height: 100,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 10,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'green',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性minimumValue slider的最小值为minimumValue设置的值 当前设置为5">
          <TestCase itShould="minimumValue" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={10}
                minimumValue={5}
                allowTouchTrack
                onSlidingComplete={(value)=>{setValue(value)}}

                maximumTrackTintColor={'pink'}
                maximumValue={40}
                animationType="timing"
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value}
              </Text>
            </View>
          </TestCase>
        </TestSuite>

        <TestSuite name="Slider属性onSlidingStart onSlidingComplete , onSlidingStart当slider开始滚动时调用 onSlidingComplete当slider结束滚动时开始调用 ">
          <TestCase
            itShould="onSlidingStart开时滚动时修改未拖动区域为绿色 onSlidingComplete停止滚动则恢复原来的颜色"
            tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={10}
                allowTouchTrack
                animateTransitions={true}
                animationConfig={{
                  toValue: 1000,
                  duration: 100,
                  useNativeDriver: true,
                }}
                onValueChange={value => {
                  console.log(value);
                  setValue4(value);
                }}
                onSlidingStart={() => {
                  setSliderStrat(true);
                }}
                onSlidingComplete={() => {
                  setSliderStrat(false);
                }}
                maximumTrackTintColor={sliderStrat ? 'pink' : 'green'}
                maximumValue={40}
                animationType="timing"
                containerStyle={{
                  containerHorizontal: {
                    height: 100,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 10,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'green',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value4}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性onValueChange , slider拖动触发，拖动时获取当前的值 可以观察底部值的变动">
          <TestCase itShould="onValueChange" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value5}
                allowTouchTrack
                // animateTransitions={true}
                // animationConfig={{
                //   toValue: 1000,
                //   duration: 100,
                //   useNativeDriver: true,
                // }}
                onValueChange={value => {
                  console.log(value);
                  setValue5(value);
                }}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                // animationType='timing'
                // containerStyle={{
                //   containerHorizontal: {
                //     height: 100,
                //     justifyContent: "center",
                //   },
                //   containerVertical: {
                //     width: 100,
                //     flexDirection: "column",
                //     alignItems: "center",
                //   },
                //   track: {
                //     borderRadius: 100,
                //   },
                //   trackHorizontal: {
                //     height: 10,
                //   },
                //   trackVertical: {
                //     flex: 0,
                //     width: 100
                //   },
                //   touchArea: {
                //     position: "absolute",
                //     backgroundColor: 'green',
                //     top: 0,
                //     left: 0,
                //     right: 0,
                //     bottom: 0,
                //   },
                //   debugThumbTouchArea: {
                //     position: "absolute",
                //     backgroundColor: 'pink',
                //     opacity: 0.7
                //   },
                // }}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value5}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性orientation , slider的方向设置">
          <TestCase itShould="orientation horizontal" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value1}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
              />
            </View>
          </TestCase>
          <TestCase itShould="orientation Vertical" tags={['C_API']}>
            <View style={{...styles.verticalContent, height: 400}}>
              <Slider
                value={vertValue}
                onSlidingComplete={setVertValue}
                maximumValue={50}
                minimumValue={20}
                step={1}
                orientation="vertical"
                allowTouchTrack
                thumbStyle={{
                  height: 20,
                  width: 16,
                  backgroundColor: 'transparent',
                }}
                thumbProps={{
                  children: (
                    <Icon
                      name="heartbeat"
                      type="font-awesome"
                      size={20}
                      reverse
                      containerStyle={{bottom: 20, right: 20}}
                      color="#f50"
                    />
                  ),
                }}
              />
            </View>
            <Text style={{paddingLeft: 25, color: '#000'}}>
              Value: {vertValue}
            </Text>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性step , step的设置的值为每次拖动slider的值">
          <TestCase itShould="step" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value6}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                onSlidingComplete={value => setValue6(value)}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value6}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性style , 设置slider容器的样式">
          <TestCase itShould="style" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value7}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                onSlidingComplete={value => setValue7(value)}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value7}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性thumbProps , 设置滚轮的属性 可以设置icon 和其他组件">
          <TestCase itShould="thumbProps" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value8}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                thumbProps={{
                  children: (
                    <Icon
                      name="remove"
                      type="font-awesome"
                      size={10}
                      reverse
                      // containerStyle={{ bottom: 20, right: 20 }}
                      color="green"
                    />
                  ),
                }}
                onSlidingComplete={value => setValue8(value)}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value8}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性thumbStyle , 设置滚轮的样式">
          <TestCase itShould="thumbStyle" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value9}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                thumbStyle={{width: 20, height: 20}}
                thumbProps={{
                  children: (
                    <Icon
                      name="save"
                      type="font-awesome"
                      size={10}
                      reverse
                      containerStyle={{bottom: 10, right: 10}}
                      color="green"
                    />
                  ),
                }}
                onSlidingComplete={value => setValue9(value)}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value9}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性thumbTintColor , 设置滚轮的背景颜色">
          <TestCase itShould="thumbTintColor" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value10}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                thumbTintColor={'blue'}
                thumbStyle={{width: 40, height: 40}}
                onSlidingComplete={value => setValue10(value)}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value10}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性thumbTouchSize , 扩大可滑动区域">
          <TestCase itShould="thumbTouchSize" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value11}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                thumbTintColor={'blue'}
                thumbStyle={{width: 40, height: 40}}
                thumbTouchSize={{height: 100, width: 0}}
                onSlidingComplete={value => setValue11(value)}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
                containerStyle={{
                  containerHorizontal: {
                    height: 100,
                    justifyContent: 'center',
                  },
                  containerVertical: {
                    width: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  track: {
                    borderRadius: 100,
                  },
                  trackHorizontal: {
                    height: 10,
                  },
                  trackVertical: {
                    flex: 0,
                    width: 100,
                  },
                  touchArea: {
                    position: 'absolute',
                    backgroundColor: 'green',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  debugThumbTouchArea: {
                    position: 'absolute',
                    backgroundColor: 'pink',
                    opacity: 0.7,
                  },
                }}
              />
              <Text style={{paddingLeft: 25, color: '#000'}}>
                Value: {value11}
              </Text>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性trackStyle , 设置已滚动区域的容器样式">
          <TestCase itShould="trackStyle" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={value12}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                thumbTintColor={'blue'}
                thumbStyle={{width: 40, height: 40}}
                trackStyle={{width: 50, height: 50}}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Slider属性value , 设置slider的值 10 ，20，25">
          <TestCase itShould="value" tags={['C_API']}>
            <View style={[styles.contentView]}>
              <Slider
                value={10}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                thumbTintColor={'blue'}
                thumbStyle={{width: 40, height: 40}}
                minimumTrackTintColor={'black'}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={[styles.contentView]}>
              <Slider
                value={20}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                thumbTintColor={'blue'}
                thumbStyle={{width: 40, height: 40}}
                minimumTrackTintColor={'black'}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={[styles.contentView]}>
              <Slider
                value={25}
                allowTouchTrack
                orientation={'horizontal'}
                maximumTrackTintColor={'pink'}
                maximumValue={40}
                step={2}
                thumbTintColor={'blue'}
                thumbStyle={{width: 40, height: 40}}
                minimumTrackTintColor={'black'}
                onValueChange={value => setValue1(value)}
                style={{
                  height: 20,
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  verticalContent: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Sliders;
