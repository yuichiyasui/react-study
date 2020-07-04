import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import firebase from '../firebase'
import { TileData } from 'types/types'

const Download: FC = () => {
  const { keyword } = useParams()
  const [data, setData] = useState<TileData[]>([])

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
  }, [keyword])

  const displayImage = () => {
    const container = {
      margin: '5rem auto',
      display: 'flex',
      justifyContent: 'center',
    }
    return (
      <div style={container}>
        {data.map((tile) => (
          <div>
            <img height="400" src={tile.image} alt={tile.title} />
            <div style={{ textAlign: 'center' }}>
              <Button variant="contained" href={tile.downloadUrl}>
                ダウンロード
              </Button>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return <div>{displayImage()}</div>
}

export default Download
