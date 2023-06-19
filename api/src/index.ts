import app from './app'
import { conectionSequelize } from './database/config'

const main = async () => {
  try {
    await conectionSequelize.sync({ force: true })

    app.listen(app.get('port'), () => {
      console.log(`🆗✅🆗 Server on port ${app.get('port')} 🆗✅🆗`)
    })
  } catch (err) {
    console.error(`🛑⛔ Not connection database ❗${err}❗ ⛔🛑`)
  }
}

main()