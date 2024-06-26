const abroad_sharing = require('../../../Schemas/abroad_sharing')
const asyncHandler = require('express-async-handler')
const { dbCatch, ErrorHandler } = require('../../../error')
/**
 * @api {get} /getoneAbroadSharing get specific abroadSharing
 * @apiName GetoneAbroadSharing
 * @apiGroup In/abroadSharing
 * @apiDescription 拿留學分享資訊
 *
 * @apiSuccess (201) {String} title  標題
 * @apiSuccess (201) {String} intro  介紹
 * @apiSuccess (201) {URL} YTlink youtube連結
 * @apiSuccess (201) {URL} otherLinks 其他連結
 *
 * @apiError (403) {String} description please provide _id
 * @apiError (404) {String} description 資料不存在
 * @apiError (500) {String} description 資料庫錯誤
 */
const getoneAbroadSharing = async (req, res, next) => {
  const { _id } = req.query
  if (!_id) throw new ErrorHandler(403, 'please provide _id')
  const sharing = await abroad_sharing.findOne({ _id }).select('-img').catch(dbCatch)
  if (!sharing) throw new ErrorHandler(404, '資料不存在')
  res.set({ 'cache-control': 'private, max-age=60' })
  res.status(201).send(sharing.getPublic())
}
const valid = require('../../../middleware/validation')
const rules = [{ filename: 'required', field: '_id', method: 'get' }]
module.exports = [valid(rules), asyncHandler(getoneAbroadSharing)]
