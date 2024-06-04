import { Spinner } from "react-bootstrap";

export interface ILoaderProps {
  showLoading: boolean;
}

export default function Loader({ showLoading }: ILoaderProps) {
  return <>{showLoading && <Spinner animation="border" />}</>;
}
