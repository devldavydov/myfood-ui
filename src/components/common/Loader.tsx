export interface ILoaderProps {
  showLoading: boolean;
}

export default function Loader({ showLoading }: ILoaderProps) {
  return (
    <>
      {showLoading && (
        <div className="spinner-border">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      )}
    </>
  );
}
