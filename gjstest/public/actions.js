// Copyright 2011 Google Inc. All Rights Reserved.
// Author: jacobsa@google.com (Aaron Jacobs)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * A mock action that simply returns retVal.
 *
 * @param {*} retVal
 * @return {!Function}
 */
gjstest.returnWith = function(retVal) {
  return function() { return retVal; };
};

/**
 * A mock action that invokes a list of other mock actions, serially, in order.
 * Returns the last action's return value (if any).
 *
 * @param {!Array.<function>} actions
 * @return {function}
 */
gjstest.doAll = function(actions) {
};
