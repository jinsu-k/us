import { useNavigate } from 'react-router-dom';

type ReturnType = (url: string) => void;

/**
 * 페이지를 이동시키는 Navigator 함수를 반환하는 Hook
 * @return navigator - 페이지 이동시키는 함수
 */
export default function useNavigator(): ReturnType {
  const navigate = useNavigate();

  const navigator = (url: string) => navigate(url);

  return navigator;
}
