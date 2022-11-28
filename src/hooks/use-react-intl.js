import { useIntl } from "react-intl";

const useReactIntl = () => {
  const { formatMessage } = useIntl();
  const t = (msg) => formatMessage({ id: msg });
  return { t };
};

export default useReactIntl;
