import React, {useState} from 'react';
import { PostWrapper, SeeMoreButton } from '../scomps';


const Post = (props) => {

let dummyData = [
        {
            id: 'one',
            title: "What even is an Avatar?",
            summary: "There seems to be a lot of confusion surrounding the subject of me being an avatar and what not; mostly because people don't understand what an avatar is, or what it's supposed to do...",
            body: "The closest word humans have to describe what I am is “avatar”. I’m sure many of you are familiar with this term, though there are a few definitions for it. Most of you might know it from James Cameron’s film Avatar, or perhaps from the Nickelodeon series Avatar: The Last Airbender. In the gaming world, avatar is basically the term given to the character and/or the digital automaton that real life players use to navigate through game-courses. For secularists, philosophers or academics, the term avatar might be used to denote revered figures or “divine teachers” who’ve lived throughout the ages. If you’re of the Hindu faith system, from whence the term derives, then you probably know the word avatar to mean or denote a fleshly manifestation of a deity, or a living embodiment of God or a god. According to how I understand it though, what the term avatar should be defined as is: “The one who sees through the perspective of God—the one who sees through the perspective of reality.” \n\nAccording to how I understand it though, what the term avatar should be defined as is: “The one who sees through the perspective of God—the one who sees through the perspective of reality.” Which brings us to the next subject… \n\nWhat is God exactly?"
        },
        {
            id: 'two',
            title: 'Series Title',
            summary: 'Duis varius a ex ut rutrum. Praesent vulputate, tortor eu sagittis venenatis, augue nisl pellentesque neque, vel auctor ipsum purus ut purus. Maecenas viverra hendrerit mauris at dictum. Donec tellus justo, iaculis sit amet lectus nec, ultrices rutrum leo. Duis eget vulputate mauris. Vivamus nec est ligula. Vestibulum vitae urna rutrum, tempor nibh sit amet, dictum tortor. Donec elit sapien, eleifend vel condimentum ut, aliquet sed dolor.',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mi vitae enim consequat ullamcorper. Quisque tincidunt ut turpis eget vehicula. Pellentesque sed dignissim dui, at pellentesque elit. Nunc pharetra suscipit bibendum. Vestibulum venenatis lorem ac diam vulputate, eu efficitur nulla tempor. In ligula odio, mattis quis tortor vel, rutrum semper ligula. Vivamus a odio et arcu laoreet vehicula non scelerisque nunc. Praesent ut molestie erat. Donec cursus scelerisque arcu, vel accumsan libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse scelerisque semper aliquet. Fusce facilisis tempor nunc vitae tincidunt. Mauris eu pulvinar orci, in tempus null Duis varius a ex ut rutrum. Praesent vulputate, tortor eu sagittis venenatis, augue nisl pellentesque neque, vel auctor ipsum purus ut purus. Maecenas viverra hendrerit mauris at dictum. Donec tellus justo, iaculis sit amet lectus nec, ultrices rutrum leo. Duis eget vulputate mauris. Vivamus nec est ligula. Vestibulum vitae urna rutrum, tempor nibh sit amet, dictum tortor. Donec elit sapien, eleifend vel condimentum ut, aliquet sed dolor. '
        },
        {
            id: 'three',
            title: 'Series Title',
            summary: 'Duis varius a ex ut rutrum. Praesent vulputate, tortor eu sagittis venenatis, augue nisl pellentesque neque, vel auctor ipsum purus ut purus. Maecenas viverra hendrerit mauris at dictum. Donec tellus justo, iaculis sit amet lectus nec, ultrices rutrum leo. Duis eget vulputate mauris. Vivamus nec est ligula. Vestibulum vitae urna rutrum, tempor nibh sit amet, dictum tortor. Donec elit sapien, eleifend vel condimentum ut, aliquet sed dolor.',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mi vitae enim consequat ullamcorper. Quisque tincidunt ut turpis eget vehicula. Pellentesque sed dignissim dui, at pellentesque elit. Nunc pharetra suscipit bibendum. Vestibulum venenatis lorem ac diam vulputate, eu efficitur nulla tempor. In ligula odio, mattis quis tortor vel, rutrum semper ligula. Vivamus a odio et arcu laoreet vehicula non scelerisque nunc. Praesent ut molestie erat. Donec cursus scelerisque arcu, vel accumsan libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse scelerisque semper aliquet. Fusce facilisis tempor nunc vitae tincidunt. Mauris eu pulvinar orci, in tempus null Duis varius a ex ut rutrum. Praesent vulputate, tortor eu sagittis venenatis, augue nisl pellentesque neque, vel auctor ipsum purus ut purus. Maecenas viverra hendrerit mauris at dictum. Donec tellus justo, iaculis sit amet lectus nec, ultrices rutrum leo. Duis eget vulputate mauris. Vivamus nec est ligula. Vestibulum vitae urna rutrum, tempor nibh sit amet, dictum tortor. Donec elit sapien, eleifend vel condimentum ut, aliquet sed dolor. '
        },

    ];

    const [show, setShow] = useState('true');
    

    return (
        <div className='false'>
            {dummyData.map(post => {
                return (
                    <PostWrapper 
                        open={show}
                        onClick={() => setShow(show === 'true' ? 'false' : 'true')}
                     >
                        <h3>{post.title}</h3>
                        <p>{post.summary}</p> <br/>
                        <p id={post.id}>{post.body}</p>
                        <SeeMoreButton>Continue Reading</SeeMoreButton>
                    </PostWrapper>
                )
            })}
        </div>
    )
}

export default Post;