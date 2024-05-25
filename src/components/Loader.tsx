export interface ILoaderProps {
  showLoading: boolean;
}

export default function Loader({ showLoading }: ILoaderProps) {
  return (
    <>
      {showLoading && (
        <div className="loader">
          <div className="content spinner-border">
            <span className="visually-hidden">Загрузка...</span>
          </div>
        </div>
      )}
    </>
  );
}
