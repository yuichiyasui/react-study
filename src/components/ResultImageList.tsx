import React, { FC, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import firebase from '../firebase'
import { TileData } from 'types/types'

import 'assets/css/components/resultImageList.scss'

const ResultImageList: FC = () => {
  /** TileDataの配列型の変数dataと関数setDataを作成して、変数dataに初期値として空の配列を与える */
  const [data, setData] = useState<TileData[]>([])
  const { keyword } = useParams()
  const history = useHistory()

  const getData = async (searchWord: string | undefined) => {
    /** Firestoreのインスタンスを生成 */
    const db = firebase.firestore()
    /** tileDataコレクションのインスタンスを生成 */
    const tileDataRef = db.collection('tileData')
    /** tileDataコレクションのkeyword配列の中から検索ワードに該当するものを取得 */
    const searchedData = tileDataRef.where(
      'keyword',
      'array-contains',
      searchWord,
    )
    const snapShot = await searchedData.get()
    /** snapShotのデータを扱える形にする */
    const temporaryData: object[] = []
    snapShot.docs.map((doc) => temporaryData.push(doc.data()))

    /** stateに値をセット(asで型変換) */
    setData(temporaryData as TileData[])
  }
  /** getDataを最初だけ呼び出す */
  useEffect(() => {
    getData(keyword)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="result-image-list">
      {data.map((tile) => (
        <div className="item" key={tile.title}>
          <Button onClick={() => history.push('/download/' + tile.title)}>
            <img width="218" src={tile.image} alt={tile.title} />
          </Button>
          <h3>{tile.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default ResultImageList
