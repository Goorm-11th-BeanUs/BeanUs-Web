import { debounce } from 'lodash'
import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Toast 타입 정의
type ToastType = 'success' | 'error' | 'warning' | 'info'

// 커스텀 훅 정의
export const useCustomToast = () => {
  // 기본 toast 옵션
  const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  }

  // 공통 토스트 함수
  const showToast = debounce(
    (message: string, type: ToastType = 'info', options: ToastOptions = {}) => {
      const mergedOptions = { ...defaultOptions, ...options }

      switch (type) {
        case 'success':
          toast.success(message, mergedOptions)
          break
        case 'error':
          toast.error(message, mergedOptions)
          break
        case 'warning':
          toast.warn(message, mergedOptions)
          break
        default:
          toast(message, mergedOptions)
      }
    },
    300
  ) // 300ms 디바운스 적용

  // 성공 토스트
  const successToast = (message: string, options?: ToastOptions) => {
    showToast(message, 'success', options)
  }

  // 에러 토스트
  const errorToast = (message: string, options?: ToastOptions) => {
    showToast(message, 'error', options)
  }

  // 경고 토스트
  const warningToast = (message: string, options?: ToastOptions) => {
    showToast(message, 'warning', options)
  }

  // 정보 토스트
  const infoToast = (message: string, options?: ToastOptions) => {
    showToast(message, 'info', options)
  }

  // 프로미스 기반 토스트 (예: API 호출 결과)
  const promiseToast = (
    promise: Promise<any>,
    messages?: {
      pending?: string
      success?: string
      error?: string
    },
    options?: ToastOptions
  ) => {
    return toast.promise(
      promise,
      {
        pending: messages?.pending || '처리 중...',
        success: messages?.success || '성공적으로 완료되었습니다.',
        error: messages?.error || '오류가 발생했습니다.',
      },
      options
    )
  }

  return {
    showToast,
    successToast,
    errorToast,
    warningToast,
    infoToast,
    promiseToast,
  }
}
