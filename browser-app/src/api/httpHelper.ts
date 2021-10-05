// リクエストメソッドを集約する場所


// TODO: 同じことをたくさん書いているので、処理を抽出したい

const API_URL = 'http://localhost:4000/tasks/'

export function getAllTasks (
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  fetch(API_URL, {
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

export function createTask (
  taskName: string,
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  fetch(API_URL, {
    mode: 'cors',
    method: 'POST',
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

export function getTaskById (
  taskId: string,
  successCallback: (result: any) => {},
  failureCallback: (error: any) => {}
) {
  fetch(`${API_URL}${taskId}`, {
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
