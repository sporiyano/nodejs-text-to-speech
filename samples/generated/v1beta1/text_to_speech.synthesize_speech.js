// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(input, voice, audioConfig) {
  // [START texttospeech_v1beta1_generated_TextToSpeech_SynthesizeSpeech_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Synthesizer requires either plain text or SSML as input.
   */
  // const input = {}
  /**
   *  Required. The desired voice of the synthesized audio.
   */
  // const voice = {}
  /**
   *  Required. The configuration of the synthesized audio.
   */
  // const audioConfig = {}
  /**
   *  Whether and what timepoints are returned in the response.
   */
  // const enableTimePointing = 1234

  // Imports the Texttospeech library
  const {TextToSpeechClient} = require('@google-cloud/text-to-speech').v1beta1;

  // Instantiates a client
  const texttospeechClient = new TextToSpeechClient();

  async function callSynthesizeSpeech() {
    // Construct request
    const request = {
      input,
      voice,
      audioConfig,
    };

    // Run request
    const response = await texttospeechClient.synthesizeSpeech(request);
    console.log(response);
  }

  callSynthesizeSpeech();
  // [END texttospeech_v1beta1_generated_TextToSpeech_SynthesizeSpeech_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
