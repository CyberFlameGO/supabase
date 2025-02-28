import React from 'react'

import annoucement from '~/data/Annoucement.json'

const Annoucement = () => {
  if (!annoucement.show) return null
  return (
    <a href={annoucement.link} target="_blank">
      <div className="bg-dark-700 text-white hover:bg-dark-600 dark:bg-white dark:text-dark-600 dark:hover:bg-dark-200 transition-colors">
        <div className="flex items-center justify-center p-2 mx-auto space-x-2 text-sm lg:container lg:px-16 xl:px-20">
          {annoucement.text}
        </div>
      </div>
    </a>
  )
}

export default Annoucement
