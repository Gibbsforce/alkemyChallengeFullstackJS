import { STORAGE } from "../utils/globalConstants.js"
import PersistenceFactorySingleton from "../persistence/DAOs/index.js"
const persistence = PersistenceFactorySingleton.getInstance(STORAGE)
export default persistence
