export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}) => layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;

export const keyExtractor = (item) => item.id.toString();
