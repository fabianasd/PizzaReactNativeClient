import styled from "styled-components/native";
import { metrics, colors } from "~/styles";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  margin-bottom: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;

  padding: 5px;
  background-color: ${colors.white};
  align-items: center;
`;

export const Image = styled.Image`
  width: 78px;
  height: 78px;
  border-radius: ${metrics.baseRadius}px;
  margin-left: ${metrics.baseMargin / 2}px;
`;

export const ContainerText = styled.View`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProductText = styled.Text`
  font-size: ${metrics.fontSizeUp}px;
  color: ${colors.darker};
  font-weight: bold;
`;

export const ProductDescriptionText = styled.Text`
  font-size: ${metrics.fontSizeDown}px;
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin}px;
`;

export const ProductTimeText = styled.Text`
  font-size: ${metrics.fontSizeDown}px;
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin}px;
`;
