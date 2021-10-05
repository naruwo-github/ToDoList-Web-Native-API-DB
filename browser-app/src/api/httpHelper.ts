// リクエストメソッドを集約する場所

const API_URL = 'http://localhost:4000/tasks/'

// GETリクエストの土台
export function getRequest (
  url: string,
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  fetch(url, {
    mode: 'cors',
    method: 'GET'
  })
    .then(res => res.json())
    .then(
      (result) => {
        successCallback(result)
      },
      // コンポーネント内のバグによる例外を隠蔽しないため、ここでエラーハンドリングすることが重要
      (error) => {
        failureCallback(error)
      }
    )
}

export function getAllTasks (
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  getRequest(
    API_URL,
    successCallback,
    failureCallback
  )
}

export function getTaskById (
  taskId: string,
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  getRequest(
    `${API_URL}${taskId}`,
    successCallback,
    failureCallback
  )
}

// POSTリクエストの土台
export function postRequest (
  url: string,
  body: string,
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  fetch(url, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
    .then(res => res.json())
    .then(
      (result) => {
        successCallback(result)
      },
      // コンポーネント内のバグによる例外を隠蔽しないため、ここでエラーハンドリングすることが重要
      (error) => {
        failureCallback(error)
      }
    )
}

export function createTask (
  taskName: string,
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  postRequest(
    API_URL,
    JSON.stringify({ name: taskName }),
    successCallback,
    failureCallback
  )
}

// DELETEリクエスト
export function deleteTaskById (
  taskId: string,
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  fetch(`${API_URL}${taskId}`, {
    mode: 'cors',
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(
      (result) => {
        successCallback(result)
      },
      // コンポーネント内のバグによる例外を隠蔽しないため、ここでエラーハンドリングすることが重要
      (error) => {
        failureCallback(error)
      }
    )
}

// PUTリクエスト
export function putTaskById (
  taskId: string,
  taskName: string,
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  fetch(`${API_URL}${taskId}`, {
    mode: 'cors',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: taskName
    })
  })
    .then(res => res.json())
    .then(
      (result) => {
        successCallback(result)
      },
      // コンポーネント内のバグによる例外を隠蔽しないため、ここでエラーハンドリングすることが重要
      (error) => {
        failureCallback(error)
      }
    )
}
